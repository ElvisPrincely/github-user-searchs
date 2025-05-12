import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useRepositories(username) {
  return useQuery(
    ['repositories', username],
    async () => {
      if (!username) return null;
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      return response.data;
    }
  );
}

export default useRepositories;
