import { apiCreate } from 'utils/api';

export const getOrdersListApi = (data) => apiCreate().get('/orders', data);
