import axios from 'axios';
import { RootPath, OnlineRoot } from './Config';

const Delete = (path, root = RootPath) => {
    const promise = new Promise( (resolve, reject) => {
        axios.delete(`${root}/${path}`)
            .then( result => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    } )
    return promise;
}

export default Delete;