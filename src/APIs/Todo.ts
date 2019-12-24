import { doGetCall } from "./Common";

export const getTodoList = () => {
    const url = 'todos/';
    return doGetCall(url);
}