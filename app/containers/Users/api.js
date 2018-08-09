import { apiCreate } from 'utils/api';

export const getUsersListApi = (data) => apiCreate().get('/users/get', data);
