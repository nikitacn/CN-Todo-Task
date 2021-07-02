import todo from './todo.services';

//API URL 
export const API_URL = "http://0.0.0.0:3000/api";

export default {
    todo : todo(API_URL)
}