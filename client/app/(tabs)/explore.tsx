import BetCard from '@/components/BetCard';
import SearchWithBadges from '@/components/SearchWithBadges';
import { ScrollView, Text } from 'react-native';

export default function Explore() {
  return (
    <ScrollView>
      <Text className="text-2xl font-bold text-center my-4">Dashboard</Text>
      <SearchWithBadges />
      {/* Add your BetCards here */}

      
      <BetCard title="Match 1" isOpen={true} timeLeft="10m" />
      <BetCard title="Match 2" isOpen={false} timeLeft="30m" />

    </ScrollView>
  );
}
