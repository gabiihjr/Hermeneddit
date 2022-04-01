import { Button, CircularProgress, TextField, Tooltip, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../constants/url';
import useForm from '../../hooks/useForm';
import useRequestData from '../../hooks/useRequestData';
import { changeCommentVote, changePostVote, createComment, createCommentVote, createPostVote, deleteCommentVote, deletePostVote } from '../../services/posts';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { ButtonContainer } from '../FeedCard/styled';
import { CommentContainer, PostContainer, PostDiv, UserContainer, TextFieldStyled } from './styled';
import { FormContainer } from '../PostForm/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const PostCard = ({ posts, getPosts, isLoading, error }) => {
    const params = useParams();
    const [form, onChange, clear] = useForm({ body: "" });
    const [isLoadingPost, setIsLoadingPost] = useState();

    const [comments, getComments, isLoadingComments, errorComments] = useRequestData([], `${baseURL}/posts/${params.id}/comments`);

    const submitComment = (event) => {
        event.preventDefault();
        createComment(params.id, form, clear, getComments, getPosts, `${baseURL}/posts`, setIsLoadingPost)
    };

    const renderPost = posts && posts
        .filter((post) => {
            return (post.id === params.id)
        })
        .map((post) => {
            const date = new Date(post.createdAt)
            const fullDate = date.toDateString();
            const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
            const time = `${date.getHours()}:${minutes}`;
            return <PostContainer key={post.id}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="caption" paragraph> Criado por <b>{post.username}</b> em {fullDate} às {time}</Typography>
                        <Typography variant="h5" paragraph>{post.title} </Typography>
                        <Typography variant="body1" paragraph>{post.body} </Typography>
                        <ButtonContainer>
                            <div>
                                {post.userVote === 1 || post.userVote === -1 ? <Button onClick={() => changePostVote(post.id, getPosts, -1)}> <ThumbDownIcon /></Button> :
                                    <Button onClick={() => createPostVote(post.id, getPosts, -1)}> <ThumbDownIcon /> </Button>
                                }
                                <Tooltip title="Delete seu voto" >
                                    <Button onClick={() => deletePostVote(post.id, getPosts)}>{post.voteSum == null ? 0 : (post.voteSum)}</Button>
                                </Tooltip>
                                {post.userVote === 1 || post.userVote === -1 ? <Button onClick={() => changePostVote(post.id, getPosts, 1)}> <ThumbUpIcon /></Button> :
                                    <Button onClick={() => createPostVote(post.id, getPosts, 1)}> <ThumbUpIcon /> </Button>
                                }
                            </div>
                            <Button> <CommentIcon /> {post.commentCount == null ? 0 : (post.commentCount)} comentários</Button>
                        </ButtonContainer>
                    </CardContent></Card>
            </PostContainer>
        });

    const renderComments = comments && comments.map((comment) => {
        const date = new Date(comment.createdAt)
        const fullDate = date.toDateString();
        const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        const time = `${date.getHours()}:${minutes}`;
        return <CommentContainer key={comment.id}>
            <Card variant="outlined">
                <CardContent>
                    <UserContainer>
                        <AccountCircleIcon />
                        <Typography variant="caption"><b>{comment.username}</b> em {fullDate} às {time}</Typography>
                    </UserContainer>
                    <Typography variant="h6" paragraph>{comment.body}</Typography>
                    {comment.userVote === 1 || comment.userVote === -1 ?
                        <Button onClick={() => changeCommentVote(comment.id, getComments, params.id, -1)}><ThumbDownIcon /> </Button> :
                        <Button onClick={() => createCommentVote(comment.id, getComments, params.id, -1)}><ThumbDownIcon /> </Button>
                    }
                    <Tooltip title="Delete seu voto" >
                        <Button onClick={() => deleteCommentVote(comment.id, getComments, params.id)}>{comment.voteSum == null ? 0 : (comment.voteSum)}</Button>
                    </Tooltip>
                    {comment.userVote === 1 || comment.userVote === -1 ?
                        <Button onClick={() => changeCommentVote(comment.id, getComments, params.id, 1)}><ThumbUpIcon /></Button> :
                        <Button onClick={() => createCommentVote(comment.id, getComments, params.id, 1)}><ThumbUpIcon /></Button>
                    }
                </CardContent>
            </Card>
        </CommentContainer>
    });

    return (
        <div>
            <PostDiv>
                {isLoading && <CircularProgress />}
                {!isLoading && error && <p>Ocorreu um erro.</p>}
                {!isLoading && posts && renderPost}
            </PostDiv>

            {!isLoadingComments && errorComments && <p>Ocorreu um erro.</p>}
            {!isLoading && comments &&
                <div>
                    <FormContainer>
                        <form onSubmit={submitComment}>

                            <TextFieldStyled
                                variant="outlined"
                                label="Novo Comentário"
                                name="body"
                                value={form.body}
                                onChange={onChange}
                                multiline
                                minRows={4}
                                margin="dense"
                                fullWidth
                                required
                            />
                            {isLoadingPost && <CircularProgress />}
                            {!isLoadingPost && <Button variant="contained" color="primary" type="submit">Postar</Button>}
                        </form>
                    </FormContainer>
                    {renderComments}
                </div>

            }
        </div>
    );
};

export default PostCard;
