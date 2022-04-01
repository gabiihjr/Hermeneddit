import PostCard from "../../components/PostCard/PostCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import { MainStyle } from "../../styled-app";

const PostPage = ({ posts, getPosts, isLoading, error }) => {
  useProtectedPage();

  return (
    <MainStyle>
      <PostCard posts={posts}
        getPosts={getPosts}
        isLoading={isLoading}
        error={error}
      />
    </MainStyle>
  );
}

export default PostPage;
