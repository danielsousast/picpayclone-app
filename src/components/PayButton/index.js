import React from 'react';
import { Container, Touch, Title } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PayButton({onPress, focused}){
  return (
    <Touch onPress={onPress}>
        <Container 
            colors={focused ? ['#fff', '#ccc']:['#00fc6c', '#00ac4a']}
        >
            <Icon name="attach-money" size={30} 
                color={focused ? '#000' : '#fff'}
            />
            <Title focused={focused}>Pagar</Title>
        </Container>
    </Touch>
  );
}
