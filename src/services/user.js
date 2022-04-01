import axios from 'axios';
import { baseURL } from '../constants/url';
import { goToFeed } from '../routes/coordinator';

export const login = async (body, clear, navigate, setLoginButton, setIsLoading) => {
    setIsLoading(true)
    const url = `${baseURL}/users/login`;

    try {
        const response = await axios.post(url, body)
        setIsLoading(false)
        localStorage.setItem("token", response.data.token);
        clear();
        goToFeed(navigate);
        setLoginButton("Logout");

    } catch (error) {
        alert(`${error.response.data.message}`)
        setIsLoading(false)
    };
};

export const signUp = async (body, clear, navigate, setLoginButton, setIsLoading) => {
    setIsLoading(true)
    const url = `${baseURL}/users/signup`;

    try {
        const response = await axios.post(url, body)
        localStorage.setItem("token", response.data.token);
        setIsLoading(false)
        clear();
        goToFeed(navigate);
        setLoginButton("Logout");

    } catch (error) {
        alert(`${error.response}`)
        setIsLoading(false)
    };
};

