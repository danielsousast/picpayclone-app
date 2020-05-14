import React from 'react';
import {
    Container, Header, HeaderTitle, HeaderButton, HeaderButtonTitle,
    Notifications, MessageContainer, Message, Date, Divider
} from './styles';

import notifications from './notifications';

const Notification = () => {
    return (
        <Container>
            <Header>
                <HeaderTitle>Notificações</HeaderTitle>
                <HeaderButton>
                    <HeaderButtonTitle>Configurar</HeaderButtonTitle>
                </HeaderButton>
            </Header>
            <Notifications>
                {
                    notifications.map(item => (
                        <>
                            <MessageContainer key={item.key}>
                                <Message>{item.text}</Message>
                                <Date>{item.date}</Date>
                            </MessageContainer>
                            <Divider />
                        </>
                    ))
                }
            </Notifications>
        </Container>
    )
}

export default Notification;