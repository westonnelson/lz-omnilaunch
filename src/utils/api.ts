import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const createUser = async (address: string) => {
  const response = await axios.post(`${API_URL}/users`, { address });
  return response.data;
};

export const getUserDeployments = async (address: string) => {
  const response = await axios.get(`${API_URL}/users/${address}/deployments`);
  return response.data;
};

export const createDeployment = async (address: string, deployment: any) => {
  const response = await axios.post(`${API_URL}/deployments`, { address, deployment });
  return response.data;
};