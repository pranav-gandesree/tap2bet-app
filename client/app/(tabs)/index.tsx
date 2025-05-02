import { ScrollView, Text } from 'react-native';
import React from 'react';
import BetCard from '@/components/BetCard';

export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Yours active bets</Text>

      <BetCard title="Match 1" isOpen={true} timeLeft="10m" />
      <BetCard title="Match 2" isOpen={false} timeLeft="30m" />

      
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Tredning Markets</Text>

      <BetCard title="Match 1" isOpen={true} timeLeft="10m" />
      <BetCard title="Match 2" isOpen={false} timeLeft="30m" />
    </ScrollView>
  );
}
