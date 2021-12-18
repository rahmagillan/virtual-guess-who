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
import { useState } from 'react'
import TextField from '@mui/material/TextField';

function SubmitVotes(props) {
    const [question, setQuestion] = useState('')
     
    const handleChange = (event) => {
        setQuestion(event.target.value)
    }

    return (
        <div>
            <TextField>

            </TextField>
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
    const { index, style }  = props
    const upvoteColor = blue[500]
    const downvoteColor = purple[500]

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemText 
                primary={"Some very inciteful and interesting question?"} 
                secondary={"Author name"}
            />
            <Votes votes="30" color={upvoteColor} />
            <IconButton color="primary"><KeyboardArrowUpIcon /></IconButton>
            <Votes votes="10" color={downvoteColor} />
            <IconButton color="secondary"><KeyboardArrowDownIcon /></IconButton>
        </ListItem>
    )
}

export default function QuestionFeed() {

    return (
        <Box
        sx={{ width: '100%', height: 400, maxWidth: 360 }}
        >
            <FixedSizeList
                height={400}
                width={360}
                itemSize={80}
                itemCount={200}
                overscanCount={5}
            >
                {Question}
            </FixedSizeList>
        </Box>
    )
}
