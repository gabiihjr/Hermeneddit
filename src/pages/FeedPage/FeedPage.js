import { Pagination } from "@material-ui/lab";
import FeedCard from "../../components/FeedCard/FeedCard";
import PostForm from "../../components/PostForm/PostForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import { MainStyle } from "../../styled-app";
import { PaginationStyled } from "./styled";

const FeedPage = ({ posts, getPosts, currentPage, changeCurrentPage, isLoading, error }) => {
  useProtectedPage();

  return (
    <MainStyle>
      <PostForm getPosts={getPosts} />
      {!isLoading && <PaginationStyled count={10} shape="rounded" color="primary" page={currentPage} onChange={changeCurrentPage} />}
      <FeedCard posts={posts} getPosts={getPosts} isLoading={isLoading} error={error} />
      {!isLoading && <PaginationStyled count={10} shape="rounded" color="primary" page={currentPage} onChange={changeCurrentPage} />}
    </MainStyle>


  );
};

export default FeedPage;
