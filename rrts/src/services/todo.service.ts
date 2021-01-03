import axios from './axios';

const todoService = {
  fetchTodos: () => {
    return axios.get('/todos');
  }
}

export default todoService;