import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useUserData(username) {
  return useQuery({
    queryKey: ['userData', username],
    queryFn: async () => {
      if (!username) return null;
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    },
  });
}

export default useUserData;
