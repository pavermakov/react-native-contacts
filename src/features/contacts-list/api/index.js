import axios from 'axios';

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    axios.get('https://randomuser.me/api/?results=30')
      .then(({ data }) => {
        resolve(data.results);
      })
      .catch(reject);
  });
}
