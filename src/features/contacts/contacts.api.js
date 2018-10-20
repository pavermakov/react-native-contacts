import axios from 'axios';

export function fetchUsers({ page }) {
  return axios.get(`https://randomuser.me/api/?results=30&page=${page}`);
}
