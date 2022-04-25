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

export function getDisciplinesByPeriod(token: string, periodId: number) {
    const promise = axios.get(`${BASE_URL}/disciplines/terms/${periodId}`, createConfig(token));

    return promise;
}

export function getTestsByType(token: string, disciplineId: number, categoryId: number) {
    const promise = axios.get(`${BASE_URL}/disciplines/${disciplineId}/categories/${categoryId}`, createConfig(token));

    return promise;
}

export function getTeachers(token: string) {
    const promise = axios.get(`${BASE_URL}/teachers`, createConfig(token));
    
    return promise;
}

export function getTestsByTeacherType(token: string, teacherId: number, categoryId: number) {
    const promise = axios.get(`${BASE_URL}/teachers/${teacherId}/categories/${categoryId}`, createConfig(token));

    return promise;
}