import React, {useState} from 'react';
import { Switch } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import credit from '../../assets/img/credit-card.png';

import {
    Container,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Balance,
    Description,
    Touch,
    Actions,
    Action,
    ActionLabel,
    UserBalance,
    UserBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardLeft,
    CardTitle,
    CardDescription,
    CardImage,
    CardButton,
    CardButtonTitle,
    Scroll,
    TicketButton,
    TicketButtonTitle
} from './styles';

const Wallet = () => {
    const [visibleBalance, setVisibleBalance] = useState(false);
    const [toogleSwitch, setToogleSwitch] = useState(false);

    function handleToogleSwitch() {
        setToogleSwitch(!toogleSwitch);
    }

    function handleToogleBalance() {
        setVisibleBalance(!visibleBalance);
    }

    return (
        <Container>
            <Scroll>
            <Header colors={
                toogleSwitch 
                ?['#52e78c', '#1ab563']
                :['#d3d3d3', '#868686']}>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Balance>R$ {visibleBalance? '0,00':'- - -'}</Balance>
                        <Touch onPress={handleToogleBalance}>
                            <Icon name="eye" size={30} color="#fff" />
                        </Touch>
                    </BalanceContainer>

                    <Description>
                        Seu saldo está rendendo 100% do CDI
                    </Description>

                    <Actions>
                        <Action>
                            <MaterialIcon name="cash-multiple" color="#fff" size={26} />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                        <Action>
                            <MaterialIcon name="bank" color="#fff" size={26} />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>

            <UserBalance>
                <UserBalanceTitle>Usar saldo a pagar</UserBalanceTitle>
                <Switch 
                    value={toogleSwitch}
                    onValueChange={handleToogleSwitch}
                />
            </UserBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>
            </PaymentMethods>

            <Card>
                <CardLeft>
                    <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                    <CardDescription>
                        Cadastre um cartão de crédito para poder fazer pagamentos meso quando não tiver saldo no seu PicPay.
                    </CardDescription>
                    <CardButton>
                        <Icon name="plus" size={26} color="#0db060"/>
                        <CardButtonTitle>
                            Adicionar cartão de crédito
                        </CardButtonTitle>
                    </CardButton>
                </CardLeft>
                <CardImage source={credit} resizeMode="contain"/>
            </Card>
            
            <TicketButton>
                <MaterialIcon name="ticket-outline" size={26} color="#0db060"/>
                <TicketButtonTitle>
                    Usar código promocional
                </TicketButtonTitle>
            </TicketButton>
                
            </Scroll>
        </Container>
    )
}

export default Wallet;