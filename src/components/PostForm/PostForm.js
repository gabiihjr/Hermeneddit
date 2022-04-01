import useForm from "../../hooks/useForm";
import { createPost } from "../../services/posts";
import { Button, CircularProgress } from "@material-ui/core";
import { FormContainer, TextFieldStyled } from "./styled";
import { useState } from "react";

const PostForm = ({ getPosts }) => {
  const [form, onChange, clear] = useForm({ title: "", body: "" });
  const [isLoadingPost, setIsLoadingPost] = useState();

  const submitPost = (event) => {
    event.preventDefault();
    createPost(form, clear, getPosts, setIsLoadingPost);
  };

  return (
    <FormContainer>
      <form onSubmit={submitPost}>

        <TextFieldStyled
          label="Título do Post"
          name="title"
          value={form.title}
          onChange={onChange}
          variant="outlined"
          margin="dense"
          required
        />

        <TextFieldStyled
          label="Crie um novo post"
          name="body"
          value={form.body}
          onChange={onChange}
          variant="outlined"
          margin="dense"
          multiline
          minRows="5"
          required
        />
        {isLoadingPost && <CircularProgress />}
        {!isLoadingPost && <Button variant="contained" color="primary" type="submit">Criar Novo Post</Button>}
      </form>
    </FormContainer>
  );
}

export default PostForm;