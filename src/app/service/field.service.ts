import { CreateFieldDTO } from 'app/models/FieldModel';
import http from './http-common';

export const getAllField = async (): Promise<any> => {
  return await http.get('/field');
};

export const addField = async (payload: CreateFieldDTO) => {
  return await http.post('/field', payload);
};
