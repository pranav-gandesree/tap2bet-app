import { View, Text } from 'react-native';
import React from 'react';

interface CardProps {
  title: string;
  isOpen: boolean;
  timeLeft: string;
}

const BetCard: React.FC<CardProps> = ({ title, isOpen, timeLeft }) => {
  return (
    <View style={{ padding: 16, borderWidth: 1, borderColor: '#786', borderRadius: 8, marginBottom: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
      <Text>Status: {isOpen ? 'Open' : 'Closed'}</Text>
      <Text>{isOpen ? `Time Left: ${timeLeft}` : `Closed ${timeLeft} ago`}</Text>
    </View>
  );
};

export default BetCard;

