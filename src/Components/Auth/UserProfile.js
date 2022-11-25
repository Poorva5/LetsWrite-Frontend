import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { styled } from "@mui/material";
import ProfileTab from './ProfileTab';
import CakeIcon from '@mui/icons-material/Cake';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


const UserDetail = styled('h3')(({ theme, color = "#6065D8" }) => ({
    fontSize: '16px',
    fontStyle: 'normal',
    color: 'rgba(62, 57, 79, 0.7)',
    fontWeight: '400',
    letterSpacing: '0.04rem',
    marginTop: '10px'
}));

const UserNameDiv = styled('h3')(({ theme, color = "#6065D8" }) => ({
    fontSize: '24px',
    fontStyle: 'normal',
    color: '#3E394F',
    fontWeight: '700',
    textAlign: 'left',
    letterSpacing: '0.04rem',
    marginBottom: '0px'
}));

const CardDiv = styled('div')(({ theme, color = "#6065D8" }) => ({
    backgroundColor: '#fff',
    width: '1300px',
    minHeight: '800px',
    margin: 'auto',
    paddingBottom: '30px',
    marginTop: '150px'
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

const SaveButton = styled('button')(({ theme, color = "#6065D8" }) => ({
    backgroundColor: ' #9792E3',
    border: 'none',
    fontSize: '18px',
    fontFamily: 'Be Vietnam Pro',
    color: '#FFFFFF',
    borderRadius: '40px',
    padding: '10px 20px 10px 20px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
}));




const UserProfile = () => {

    const navigate = useNavigate();

    const navigateToCreateBlog = () => {
        navigate('/create-blog')
    };

    return (
        <CardDiv>
            <div>
                <div style={{ display: 'flex' }}>
                    <Avatar alt="Shammy Roy" src="/static/images/avatar/1.jpg" sx={{ width: 96, height: 96, bgcolor: deepPurple[500], fontSize: '40px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                        <UserNameDiv>Suresh Kr</UserNameDiv>
                        <div>
                            <UserDetail>Nunc ac interdum imperdiet leo, molestie lorem eu. In elementum, condimentum blandit morbi. Aliquet condimentum</UserDetail>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '120px', marginRight: '200px' }} >
                    <DateStyle><CakeIcon sx={{ paddingRight: '10px' }} />16 Sep 1998</DateStyle>
                    <SaveButton onClick={navigateToCreateBlog} ><ModeEditIcon sx={{ pr: 1 }} /> Write New Blog</SaveButton>
                </div>
                <ProfileTab />
            </div>
        </CardDiv >
    )
}

export default UserProfile;