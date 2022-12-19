import axiosClient from './axiosClient';

const todoApis = {
  async get() {
    // 2xx
    // url =  localhost:8000/todos
    const response = await axiosClient.get('/todos');
    if (response.status === 200) {
      return response.data;
    } else {
      console.log('Error ');
    }
  },
  async post(item) {
    const response = await axiosClient.get('todos');
    console.log(response.data);
    return response;
  },
  async put() {
    const response = await axiosClient.get('todos');
    console.log(response.data);
    return response;
  },
};

export default todoApis;
