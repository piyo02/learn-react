import axios from 'axios';
import { RootPath, OnlineRoot } from './Config';

const Get = (path, root = RootPath) => {
    const promise = new Promise( (resolve, reject) => {
        axios.get(`${root}/${path}`)
            .then(result => {
                resolve(result.data)
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

export default Get;