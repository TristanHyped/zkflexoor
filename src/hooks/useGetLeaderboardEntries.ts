import { supabase } from '@/clients/supabaseClient';
import { useQuery } from '@tanstack/react-query';

export const useGetLeaderboardEntries = () => {
  const { data } = useQuery({
    queryKey: ['leaderboard'],
    queryFn: async () => {
      const { data, error } = await supabase.from('leaderboard').select('*');
      if (error) {
        console.error('Error fetching leaderboard entries:', error);
        return [];
      }
      return data;
    },
    initialData: [],
    refetchInterval: 5000,
  });

  console.log('data', data);

  return { data };
};
