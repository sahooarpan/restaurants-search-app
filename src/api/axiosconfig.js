import axios from 'axios';
export default axios.create({
    baseURL:'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key':'180309a966de36b22fd0bdef78f2ae47'
    }
});