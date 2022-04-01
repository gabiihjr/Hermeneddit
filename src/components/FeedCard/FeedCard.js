import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/coordinator";
import { changePostVote, createPostVote, deletePostVote } from "../../services/posts";
import { PostContainer, ButtonContainer, CardButton, SearchContainer, CardContainer } from "./styled";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Button, CircularProgress, Tooltip, Typography, InputBase } from "@material-ui/core";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import SearchIcon from '@material-ui/icons/Search';
import useForm from "../../hooks/useForm";
import { MainStyle } from "../../styled-app";

const FeedCard = ({ posts, getPosts, isLoading, error }) => {
    const [form, onChange] = useForm({ search: "" });
    const navigate = useNavigate();

    const changeToPost = (id) => {
        goToPost(navigate, id);
    };

    const renderPosts = posts && posts
        .filter((post) => {
            return post.title.toLowerCase().includes(form.search.toLowerCase()) ||
                post.body.toLowerCase().includes(form.search.toLowerCase())
        })
        .map((post) => {
            const date = new Date(post.createdAt)
            const fullDate = date.toDateString();
            const minutes = (date.getMinutes()<10 ? '0' : '') + date.getMinutes();
            const time = `${date.getHours()}:${minutes}`;
            return (
                <PostContainer key={post.id}>
                    <CardButton onClick={() => changeToPost(post.id)}><Typography paragraph variant="caption">Criado por <b>{post.username}</b> em {fullDate} às {time}</Typography>
                        <Typography variant="h5" paragraph>{post.title} </Typography>
                        <Typography variant="body1" paragraph>{post.body} </Typography></CardButton>
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
                        <Button onClick={() => changeToPost(post.id)}> <CommentIcon /> {post.commentCount == null ? 0 : (post.commentCount)} comentários</Button>

                    </ButtonContainer>

                </PostContainer>
            )
        });
        console.log(error)

    return (
        <MainStyle>
            {!isLoading &&
                <div>
                    <SearchContainer>
                        <div>
                            <SearchIcon color="primary" />
                        </div>
                        <InputBase
                            placeholder="Pesquisar…"
                            label="Pesquisar..."
                            name="search"
                            value={form.search}
                            onChange={onChange}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </SearchContainer>
                </div>}
            {isLoading && <CircularProgress />}
            {!isLoading && error && <p>Ocorreu um erro. Recarregue a página.</p>}
            <CardContainer>
                {!isLoading && posts && renderPosts}
            </CardContainer>
        </MainStyle>
    );
};

export default FeedCard;