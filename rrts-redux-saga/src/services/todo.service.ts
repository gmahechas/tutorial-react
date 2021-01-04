import axios from './axios';

const todoService = {
  fetchTodos: async () => {
    return (await axios.get('/todos')).data;
  }
}

export default todoService;