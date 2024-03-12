import axios from 'axios';

import { API_FACT } from '@/shared/config';

interface Fact {
  fact: string;
  length: number;
}

export const fetchFact = async (): Promise<Fact> => {
  try {
    const response = await axios.get(API_FACT);
    return response.data;
  } catch {
    throw new Error('Could not fetch fact');
  }
};
