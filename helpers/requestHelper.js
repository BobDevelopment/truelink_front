import { API_URL } from '@env';
import fetch from 'isomorphic-unfetch';

export const request = (path, ...props) => {
    return fetch(`${API_URL}${path}`, ...props);
};