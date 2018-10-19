import axios from 'axios';

export function fetchUsers() {
  return axios.get('https://randomuser.me/api/?results=30');
}
