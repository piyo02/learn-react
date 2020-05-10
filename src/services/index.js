import { RootPath, OnlineRoot } from './Config';
import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

const getNewsBlog = () => Get('posts?_sort=id&_order=desc');
const getComments = () => Get('comments', OnlineRoot);

const postNewsBlog = (data) => Post('posts', data)

const putNewsBlog = (id, data) => Put(`posts/${id}`, data);

const deleteNewsBlog = (id) => Delete(`posts/${id}`);

const API = {
    getNewsBlog,
    getComments,
    postNewsBlog,
    putNewsBlog,
    deleteNewsBlog,
}

export default API;