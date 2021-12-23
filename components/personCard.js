import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image';

const itemData = [
    {
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },
    {
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },    {
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },    {
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },    {
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },    {
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },    {
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },    {
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },
    {
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },{
        img: '/images/eric.JPG',
        title: 'Best Hackathon',
        author: 'Votes:',
        flipped: false,
        votes: 0
    },
];

export default function GameBoard() {
    return (
        <ImageList>
          <ImageListItem key="Subheader" cols={10}>
            <ListSubheader component="div">Guess who?</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <Image
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                objectFit='cover'
                width={500}
                height={500}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      );
}