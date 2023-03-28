import { styled } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBlog } from "../../store/blog";
import { useSelector } from 'react-redux';


const CardDiv = styled('div')(({ theme, color = "#6065D8" }) => ({
    backgroundColor: '#fff',
    width: '945px',
    minHeight: '800px',
    margin: 'auto',
    paddingBottom: '30px',
    marginTop: '150px'
}));

const TitleStyle = styled('p')(() => ({
    textAlign: 'left',
    color: '#3E394F',
    fontWeight: '800',
    fontSize: '40px',
    fontStyle: 'normal',
    fontFamily: 'Be Vietnam Pro',
    lineHeight: '62px',
}));

const ImgDiv = styled('img')(({ theme, color = "#6065D8" }) => ({
    width: '1015px',
    height: '507px',
    margin: 'auto'
}));

const ContentStyle = styled('p')(({ theme, color = "#6065D8" }) => ({
    textAlign: 'left',
    color: '#3E394F',
    fontWeight: '400',
    fontSize: '22px',
    fontStyle: 'normal',
    fontFamily: 'Be Vietnam Pro',
    lineHeight: '45px',
    paddingBottom: '20px',
    letterSpacing: '0.02rem'
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

const BlogDetails = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlog(id));
    }, [])

    const { post } = useSelector(state => state.blog);

    const navigate = useNavigate();

    const token = localStorage.getItem("accessToken")

    return (
        <div style={{ marginTop: '100px' }}>
            <CardDiv>
                <div style={{ display: 'flex' }}>
                    <ArrowBackIcon sx={{ alignItems: 'center', color: '#48435', fontSize: '29px' }} />
                    <button onClick={() => { navigate(-1) }} style={{ alignItems: 'left', display: 'flex', background: 'none', border: 'none', fontSize: '20px', fontFamily: 'Be Vietnam Pro', color: '#48435C', marginBottom: '49px' }} > Go Back</button>
                </div>
                <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 46, height: 46, bgcolor: deepPurple[500] }} />
                    <h1 style={{ fontSize: '16px', lineHeight: '20px', fontWeight: '500', fontFamily: 'Be Vietnam Pro', alignItems: 'center', letterSpacing: '0.04rem', display: 'flex' }}>{post?.email}</h1>
                    <DateStyle>&#x2022; {post?.created_at}</DateStyle>
                </Stack>
                <TitleStyle>{post?.title}</TitleStyle>
                {post?.imgUrl ? <ImgDiv src="https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png" /> : null}
                <ContentStyle>{post?.body}</ContentStyle>
                {token ? (<><h6>Create blog</h6></>) : null}
            </CardDiv>
        </div >
    )
}

export default BlogDetails;