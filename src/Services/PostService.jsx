import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';


export default class PostService {
   constructor() {
      console.log();
   }

   getPosts() {
      const url = `${API_URL}/api/post/`;
      return axios.get(url).then(response => response.data);
   }

   getPage(page) {
      const url = `${API_URL}/api/post/?page=&{page}`;
      return axios.get(url).then(response => response.data);
   }

   getPost(pk) {
      const url = `${API_URL}/api/post/${pk}`;
      return axios.get(url).then(response => response.data);
   }

   createPost(post) {
      const url = `${API_URL}/api/post/`;
      return axios.post(url, post);
   }

   updatePost(post) {
      const url = `${API_URL}/api/post/${post.pk}`;
      return axios.put(url, post);
   }
}

