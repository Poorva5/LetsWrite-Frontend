import { styled } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


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

    return (
        <div style={{ marginTop: '100px' }}>
            <CardDiv>
                <div style={{ display: 'flex' }}>
                    <ArrowBackIcon sx={{ alignItems: 'center', color: '#48435', fontSize: '29px' }}/>
                    <button onClick={{}} style={{ alignItems: 'left', display: 'flex', background: 'none', border: 'none', fontSize: '20px', fontFamily: 'Be Vietnam Pro', color: '#48435C', marginBottom: '49px' }} > Go Back</button>
                </div>
                <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 46, height: 46, bgcolor: deepPurple[500] }} />
                    <h1 style={{ fontSize: '16px', lineHeight: '20px', fontWeight: '500', fontFamily: 'Be Vietnam Pro', alignItems: 'center', letterSpacing: '0.04rem', display: 'flex' }}>Suresh Kr</h1>
                    <DateStyle>&#x2022; 9th Sep 2022</DateStyle>
                </Stack>
                <TitleStyle>API's are eating the value chain: Why we're transition to API - first</TitleStyle>
                <ImgDiv src="https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png" />
                <ContentStyle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas mi sed sit tristique aliquet. Blandit sapien aliquet neque amet, dolor sapien at varius euismod. Risus viverra elit, sit aliquet. Id pretium amet, neque a hendrerit nibh in. Pellentesque tortor, in sed in dolor. Aliquam sit eget elit amet. Tristique consequat faucibus bibendum sed pellentesque. Suscipit sit metus, tempor dolor. Cursus gravida sem a magna ante dui. Integer in duis dictum ullamcorper ultricies. Feugiat semper tellus volutpat facilisis.
                    Tristique lectus sem volutpat diam consequat. Nulla scelerisque at accumsan diam. Aenean nunc mauris, cursus et in est, imperdiet vehicula tincidunt. Ultrices laoreet tincidunt justo, eget orci scelerisque rhoncus non. A risus, id vitae sed cum integer adipiscing condimentum. Neque ante ullamcorper id pellentesque cras nulla sed. Massa ante ac non, in vitae amet, neque sapien. Interdum pharetra, varius aliquam elit. Mattis sit id tellus morbi. Risus sed dui luctus aliquam risus duis. Eget pretium ut et, sit. Mauris purus morbi magna luctus. Mauris, imperdiet condimentum lobortis elit risus. Neque sapien cursus platea nulla eu.
                    Enim nunc elementum ornare malesuada. Faucibus congue nullam nunc ullamcorper pellentesque id accumsan elementum euismod. Praesent mi dolor amet laoreet id egestas ut. Id posuere et nunc vestibulum. Dolor, egestas vel eget curabitur. Lacus est habitant cursus ut elit senectus risus consequat. At lectus vivamus enim vivamus. Sem viverra amet risus nunc et tellus.
                    Vel ut mauris id vitae dui suspendisse vestibulum. Ultrices arcu sagittis sit aliquet. Eget sed ipsum adipiscing euismod ut. Viverra gravida ac quis sit interdum nunc donec at. Bibendum fames fusce sed commodo, eget viverra nibh. Quisque in eget imperdiet non, diam feugiat consectetur ornare. Lorem odio neque facilisis accumsan orci mauris id.
                    Nunc ac interdum imperdiet leo, molestie lorem eu. In elementum, condimentum blandit morbi. Aliquet dignissim ultricies adipiscing velit. Amet id sed viverra sed placerat leo. Morbi ultrices volutpat platea interdum dui tempus enim, ornare elementum. At nec feugiat nunc neque volutpat volutpat ac netus. Turpis lacus ipsum cras posuere purus in consequat mauris nisl. Pulvinar odio nisl nulla id.</ContentStyle>

            </CardDiv>
        </div >
    )
}

export default BlogDetails;