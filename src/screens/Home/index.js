import React from 'react';

import { Container, Header, BalanceContainer, BalanceTitle, Balance, Scroll } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

const Home = () => {
    return (
        <Container>
            <Scroll>
                <Header>
                    <Icon name="qrcode-scan" size={30} color="#10c86e"/>

                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <Icon name="gift-outline" size={30} color="#10c86e"/>
                </Header>
                <Suggestions />
                <Activities />
                <Tips />
                <Banner />
            </Scroll>
        </Container>
    )
}

export default Home;