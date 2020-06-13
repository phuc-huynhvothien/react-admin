import Axios from 'axios';

const instance = Axios.create({
    baseURL : 'http://127.0.0.1:8000/api'
});

instance.defaults.headers.common['Authorization'] ='Authorization TOKEN FROM INSTANCE';
export default instance;
