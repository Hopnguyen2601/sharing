import axiosClient from './axiosClient';

const todoApis = {
  /**
   * Add a new todo
   * @param {object} todo
   */
  add: async (todo) => {
    try {
      const response = await axiosClient.post('/todos', todo);
      return response;
    } catch (error) {
      console.log(error);
      alert('Cannot connect to API.');
    }
  },

  //  Get a list of todos
  getAll: async () => {
    try {
      const response = await axiosClient.get('/todos');
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // Update by id
  edit: async (data) => {
    try {
      const response = await axiosClient.patch('/todos/', data);
      return response;
    } catch (error) {
      console.log(error);
      alert('Cannot connect to API.');
    }
  },

  /**
   * Update a todo
   * @param {object} todo
   */
  update: async (todo) => {
    // Require id to process further
    if (!todo.id) throw new Error('Missing id in todo object');

    try {
      const response = await axiosClient.patch(`/todos/${todo.id}`, todo);
      return response;
    } catch (error) {
      console.log(error);
      alert('Cannot connect to API.');
    }
  },

  /**
   * Remove a todo by id
   * @param {object} todoId
   */
  delete: async (todoId) => {
    try {
      const response = await axiosClient.delete(`/todos/${todoId}`);
      return response;
    } catch (error) {
      console.log(error);
      alert('Cannot connect to API.');
    }
  },
};

export default todoApis;
