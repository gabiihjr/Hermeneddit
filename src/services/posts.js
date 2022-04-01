import axios from "axios";
import { baseURL } from "../constants/url";

export const createPost = async (body, clear, getData, setIsLoading) => {
  setIsLoading(true);
  const url = `${baseURL}/posts`;
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  };

  try {
    const response = await axios.post(url, body, config)
    alert(response.data);
    setIsLoading(false);
    getData(`${baseURL}/posts`);
    clear();

  } catch (error) {
    alert(error.response.data);
    setIsLoading(false);
  };

};

export const createComment = async (id, body, clear, getData, getPost, urlBase, setIsLoading) => {
  setIsLoading(true);
  const url = `${baseURL}/posts/${id}/comments`;
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  };

  try {
    const response = await axios.post(url, body, config)
    alert(response.data);
    setIsLoading(false);
    getPost(urlBase);
    getData(`${baseURL}/posts/${id}/comments`);
    clear();


  } catch (error) {
    alert(error.response);
    setIsLoading(false);
  };

};

export const createPostVote = async (id, getData, status) => {
  const url = `${baseURL}/posts/${id}/votes`;
  const body = {
    direction: status
  }
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  };

  try {
    await axios.post(url, body, config)
    getData(`${baseURL}/posts`)

  } catch (error) {
    alert(error.response)
  };

};

export const changePostVote = async (id, getData, status) => {
  const url = `${baseURL}/posts/${id}/votes`
  const body = {
    direction: status
  }
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  };

  try {
    await axios.put(url, body, config)
    getData(`${baseURL}/posts`)

  } catch (error) {
    alert(error.response)

  };

};

export const createCommentVote = async (id, getData, param, status) => {
  const url = `${baseURL}/comments/${id}/votes`
  const body = {
    direction: status
  }
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  };

  try {
    await axios.put(url, body, config)
    getData(`${baseURL}/posts/${param}/comments`)

  } catch (error) {
    alert(error.response)
  };

};

export const changeCommentVote = async (id, getData, param, status) => {
  const url = `${baseURL}/comments/${id}/votes`
  const body = {
    direction: status
  }
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  };

  try {
    await axios.put(url, body, config)
    getData(`${baseURL}/posts/${param}/comments`)

  } catch (error) {
    alert(error.response)
  };

};

export const deletePostVote = async (id, getData) => {
  const url = `${baseURL}/posts/${id}/votes`
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }

  try {
    await axios.delete(url, config)
    getData(`${baseURL}/posts`);

  } catch (error) {
    alert(error.response)
  };

};

export const deleteCommentVote = async (id, getData, param) => {
  const url = `${baseURL}/comments/${id}/votes`
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }

  try {
    await axios.delete(url, config)
    getData(`${baseURL}/posts/${param}/comments`)

  } catch (error) {
    alert(error.response)
  };

};