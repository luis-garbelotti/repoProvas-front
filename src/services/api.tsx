import axios from "axios";

const BASE_URL: string = 'http://localhost:5000';

function createConfig(token: string): any {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

interface authData {
    email: string,
    password: string
}

export function signUp(body: authData) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);

    return promise;
}

export function signIn(body: authData) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);

    return promise;
}

export function getPeriods(token: string) {
    const promise = axios.get(`${BASE_URL}/terms`, createConfig(token));

    return promise;
}