import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { FixedSizeList } from 'react-window'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import IconButton from '@mui/material/IconButton'
import { Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { purple } from '@mui/material/colors'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { ref, push, set, child, onValue, update, orderByChild, query } from 'firebase/database'

function SubmitQuestion(props) {
    const {db, setRefresh} = props
    const [question, setQuestion] = useState('')
     
    const handleChange = (event) => {
        setQuestion(event.target.value)
    }

    const submitQuestion = () => {
        const newPostKey = push(child(ref(db), 'questions')).key
        set(ref(db, 'questions/' + newPostKey), {
            question: question,
            author: "placeholder",
            upvotes: 0,
            downvotes: 0
        })
        setRefresh(true)
        setQuestion("")
    }

    return (
        <div>
            <TextField
                label="New Question"
                multiline
                maxRows={4}
                value={question}
                onChange={handleChange}
            >
            </TextField>
            <Button onClick={submitQuestion}>Submit</Button>
        </div>
    )
}

function Votes(props) {
    const votesStyle = {
        paddingLeft: "2px",
        color: props.color
    }
    return(
        <div style={votesStyle}>
            <Typography variant='body1'>{props.votes}</Typography>
        </div>
    )
}

function Question(props) {
    const { index, style, data }  = props
    const upvoteColor = blue[500]
    const downvoteColor = purple[500]
    const rowData = data.questions[index]
    const vote = data.voteOnClick

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemText 
                primary={rowData.data.question ? rowData.data.question : ""} 
                secondary={rowData.data.author ? rowData.data.author : "No Author"}
            />
            <Votes votes={upvotes} color={upvoteColor} />
            <IconButton onClick={() => vote('up', index)} color="primary"><KeyboardArrowUpIcon /></IconButton>
            <Votes votes={downvotes} color={downvoteColor} />
            <IconButton onClick={() => vote('down', index)} color="secondary"><KeyboardArrowDownIcon /></IconButton>
        </ListItem>
    )
}

export default function QuestionFeed(props) {
    const { db } = props
    const [questions, setQuestions] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const test = query(ref(db, 'questions/'), orderByChild('upvotes'))
        const fetchQuestions = []
        const keys = []
        const questions = []
        onValue(test,  (snapshot) => {
            snapshot.forEach((child) => {
                keys.push(child.key)
                fetchQuestions.push(child.val())
            })
        })

        fetchQuestions.reverse()
        keys.reverse()

        for (let q in fetchQuestions) {
            questions.push({
                "key": keys[q],
                "data": fetchQuestions[q]
            })
        }
        
        setQuestions(questions)

    }, [db, refresh, setQuestions]) 

    const vote = (type, index) => { // type 'up' or 'down'
        const question = questions[index]
        type === 'up' ? question.data.upvotes += 1 : question.data.downvotes += 1
        const updates = {}
        updates['questions/'+question.key] = question.data
        update(ref(db), updates)
        setRefresh(true)
    }

    return (
        <Box 
            sx={{ width: '100%', height: 400, maxWidth: 360 }}
        >
            <FixedSizeList
                height={400}
                width={360}
                itemSize={80}
                itemCount={questions.length ? questions.length : 0}
                overscanCount={5}
                itemData={{
                    "questions": questions, 
                    "voteOnClick": vote
                }}
            >
                {Question}
            </FixedSizeList>
            <SubmitQuestion db={props.db} setQuestions={setQuestions} refresh={refresh} setRefresh={setRefresh} />
        </Box>
    )
}
