import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const foodService = {
  getAll: async () => {
    const response = await api.get('/foods');
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/foods/${id}`);
    return response.data;
  },
  create: async (foodData) => {
    const response = await api.post('/foods', foodData);
    return response.data;
  },
  update: async (id, foodData) => {
    const response = await api.put(`/foods/${id}`, foodData);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/foods/${id}`);
    return response.data;
  },
};

export const authService = {
  register: async (userData) => {
    const existing = await api.get(`/users?email=${userData.email}`);
    if (existing.data.length > 0) {
      throw new Error('User already exists with this email address.');
    }
    const response = await api.post('/users', { ...userData, role: 'customer' });
    return response.data;
  },
  login: async (email, password) => {
    const response = await api.get(`/users?email=${email}`);
    if (response.data.length === 0) {
      throw new Error('Account does not exist. Please register first.');
    }
    const user = response.data[0];
    if (user.password !== password) {
      throw new Error('Invalid password. Please try again.');
    }
    return user;
  },
  adminLogin: async (email, password) => {
    const response = await api.get(`/users?email=${email}&role=admin`);
    if (response.data.length === 0) {
      throw new Error('Admin account does not exist.');
    }
    const admin = response.data[0];
    if (admin.password !== password) {
      throw new Error('Invalid password. Please try again.');
    }
    return admin;
  },
};

export const orderService = {
  getAll: async () => {
    const response = await api.get('/orders');
    return response.data;
  },
  create: async (orderData) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  },
  getByUser: async (userId) => {
    const response = await api.get(`/orders?userId=${userId}`);
    return response.data;
  },
  updateStatus: async (id, status) => {
    const response = await api.patch(`/orders/${id}`, { status });
    return response.data;
  },
};

export const customerService = {
  getAll: async () => {
    const response = await api.get('/users?role=customer');
    return response.data;
  },
};

export const reviewService = {
  getAll: async () => {
    const response = await api.get('/reviews');
    return response.data;
  },
};

export default api;
