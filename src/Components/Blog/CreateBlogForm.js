import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createBlog } from "../../store/blog";
import { useDispatch } from "react-redux";
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

const schema = yup.object().shape({
    title: yup.string().required(),
    body: yup.string().required(),
})


const BlogForm = () => {
    const { control, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch()

    const onSubmit = data => {
        console.log(data, 'log')
        dispatch(createBlog(data))
    };
    return (
        <div style={{ marginTop: '100px', marginLeft: '50px', marginRight: '50px' }} >
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <h1>Create blog</h1>
                <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
                    <StyledButton type="submit"> Publish </StyledButton>
                    {/* <StyledButton type="submit"> Save As Draft </StyledButton> */}
                </div>
                <StyledInputDiv>
                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => <TextField
                            type="title"
                            fullWidth
                            {...field}
                            placeholder={"Enter title here"}
                            size="small"
                            value={field.value}
                            error={!!errors.title}
                            helperText={errors.title ? errors.title?.message : ""}
                            sx={{
                                "& legend": { display: "none" },
                                "& fieldset": { top: 0 },
                            }}
                        />}
                    />
                </StyledInputDiv>
                <StyledInputDiv>
                    <Controller
                        name="body"
                        control={control}
                        render={({ field }) => <TextareaAutosize
                            aria-label="empty textarea"
                            minRows={30}
                            {...field}
                            placeholder={"Enter content here"}
                            style={{ width: '100%' }}
                            error={!!errors.title}
                            helperText={errors.title ? errors.title?.message : ""}
                            sx={{
                                "& legend": { display: "none" },
                                "& fieldset": { top: 0 },
                            }}
                        />}
                    />
                </StyledInputDiv>
            </StyledForm>
        </div>
    );
};

export default BlogForm;
