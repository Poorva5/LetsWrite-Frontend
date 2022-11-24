import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';

const StyledForm = styled('form')(({ theme, color = "#6065D8" }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: 'auto',
}));

const StyledInputDiv = styled('div')(({ theme, color = "#6065D8" }) => ({
    margin: '20px auto',
    width: '100%'
}));


const StyledButton = styled('button')(({ theme, color = "#6065D8" }) => ({
    backgroundColor: color,
    width: '200px',
    height: 50,
    borderRadius: '50px',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#FFFFFF',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
    alignItems: 'center',
    paddingRight: '10px',
    marginLeft: '10px'
}));


const BlogForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: '',
            content: '',
        }
    });
    const onSubmit = data => console.log(data);

    return (
        <div style={{ marginTop: '100px', marginLeft: '50px', marginRight: '50px' }} >
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <h1>Create blog</h1>
                <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
                    <StyledButton type="submit">Publish</StyledButton>
                    <StyledButton type="submit">Save As Draft</StyledButton>
                </div>
                <StyledInputDiv>
                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => <TextField id="standard-basic" label="Title" variant="standard" style={{ width: '100%' }} />}
                    />
                </StyledInputDiv>
                <StyledInputDiv>
                    <Controller
                        name="content"
                        control={control}
                        render={({ field }) => <TextareaAutosize
                            aria-label="empty textarea"
                            minRows={30}
                            placeholder="Content"
                            style={{ width: '100%' }}
                        />}
                    />
                </StyledInputDiv>
            </StyledForm>
        </div>
    );
};

export default BlogForm;
