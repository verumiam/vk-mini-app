import axios from 'axios';

import { API_USER } from '@/shared/config';

interface User {
  count: number;
  name: string;
  age: number;
}

export const fetchUser = async (name: string): Promise<User> => {
  try {
    const response = await axios.get(`${API_USER}?name=${name}`);
    return response.data;
  } catch {
    throw new Error('Could not fetch user');
  }
};
