import React from 'react';
import { styled } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import { useNavigate, useParams } from 'react-router-dom';


const CardDiv = styled('div')(({ theme, color = "#6065D8" }) => ({
    backgroundColor: '#fff',

    margin: 'auto',
    paddingBottom: '30px'

}));

const ImgDiv = styled('img')(({ theme, color = "#6065D8" }) => ({
    width: '945px',
    height: '477px',
    margin: 'auto'
}));

const TitleStyle = styled('p')(() => ({
    textAlign: 'left',
    color: '#3E394F',
    fontWeight: '800',
    fontSize: '30px',
    fontStyle: 'normal',
    fontFamily: 'Be Vietnam Pro',
    lineHeight: '52px',
    cursor: 'pointer'
}));

const ContentStyle = styled('p')(({ theme, color = "#6065D8" }) => ({
    textAlign: 'left',
    color: 'rgba(62, 57, 79, 0.74)',
    fontWeight: '500',
    fontSize: '20px',
    fontStyle: 'normal',
    fontFamily: 'Be Vietnam Pro',
    lineHeight: '36px',
    paddingBottom: '20px'
}));

const DateStyle = styled('p')(({ theme, color = "#6065D8" }) => ({
    fontSize: '16px',
    fontStyle: 'normal',
    color: 'rgba(62, 57, 79, 0.7)',
    fontWeight: '400',
    lineHeight: '20px',
    letterSpacing: '0.04rem',
    display: 'flex',
    alignItems: 'center'
}));


const Blog = ({ blog: { title, body,
    imgUrl, author, created_at, id }, index }) => {
    console.log(title, body, 'dta')
    const navigate = useNavigate();


    return (
        <CardDiv>
            {imgUrl ? <ImgDiv src={imgUrl} /> : null}
            <TitleStyle onClick={() => { navigate(`/details/${id}`) }}>{title}</TitleStyle>
            <ContentStyle>{body}</ContentStyle>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 46, height: 46, bgcolor: deepPurple[500] }} />
                <h1 style={{ fontSize: '16px', lineHeight: '20px', fontWeight: '500', fontFamily: 'Be Vietnam Pro', alignItems: 'center', letterSpacing: '0.04rem', display: 'flex' }}>{author}</h1>
                <DateStyle><span>&#x2022; </span> {created_at}</DateStyle>
            </Stack>
        </CardDiv>
    )
}

export default Blog;