import axios from 'axios';
import { RootPath, OnlineRoot } from './Config';

const Put = (path, data, root = RootPath) => {
    const promise = new Promise( (resolve, reject) => {
        axios.put(`${root}/${path}`, data)
            .then( result => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    } )
    return promise;
}

export default Put;