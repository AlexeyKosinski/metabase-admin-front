import { apiCreate } from 'utils/api';
import apiSubmissionError from 'utils/apiSubmissionError';
import logIn from 'utils/logIn';

export const loginApi = ({ data, dispatch }) =>
  apiCreate()
    .post('/account/login', data)
    .then(apiSubmissionError('login'))
    .then(payload => logIn(payload, dispatch));