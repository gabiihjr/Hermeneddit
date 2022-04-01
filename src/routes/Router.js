import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FeedPage from '../pages/FeedPage/FeedPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import PostPage from '../pages/PostPage/PostPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = ({ setLoginButton, currentPage, changeCurrentPage, posts, getPosts, isLoading, error }) => {
    return (
        <Routes>

            <Route path="/" element={<FeedPage currentPage={currentPage}
                changeCurrentPage={changeCurrentPage}
                posts={posts}
                getPosts={getPosts}
                isLoading={isLoading}
                error={error}
                />} />

            <Route path='/login' element={<LoginPage setLoginButton={setLoginButton} />} />

            <Route path="/signup" element={<SignUpPage setLoginButton={setLoginButton} />} />

            <Route path="/post/:id" element={<PostPage currentPage={currentPage}
                posts={posts}
                getPosts={getPosts} 
                isLoading={isLoading}
                error={error}
                />} />

            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
};

export default Router;