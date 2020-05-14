import React from 'react';
import avatar from '../../assets/img/avataaars.png'
import {
    Container,
    Header,
    Avatar,
    UserName,
    FullName,
    Section,
    SectionItem,
    SectionItemText,
    SectionItemDescription,
    Divider,
    SectionTitle,
    ScrollContainer
} from './styles';

const Settings = () => {
    return (
        <Container>
            <ScrollContainer showsVerticalScrollIndicator={false}>
                <Header>
                    <Avatar source={avatar} resizeMode="contain"/>
                    <UserName>@meu.usaurio</UserName>
                    <FullName>Daniel de Sousa Santos</FullName>
                </Header>
                <SectionTitle>Minha conta</SectionTitle>
                <Section>
                    <SectionItem>
                        <SectionItemText>Meu PicPay</SectionItemText>
                        <SectionItemDescription>@meu.usario</SectionItemDescription>
                    </SectionItem>
                    <Divider />
                    <SectionItem>
                        <SectionItemText>Meu Número</SectionItemText>
                        <SectionItemDescription>(**)****6666</SectionItemDescription>
                    </SectionItem>
                    <Divider />
                    <SectionItem>
                        <SectionItemText>Meu E-mail</SectionItemText>
                        <SectionItemDescription>d*******@gmail.com</SectionItemDescription>
                    </SectionItem>
                </Section>

                <SectionTitle>Promoções</SectionTitle>
                <Section>
                    <SectionItem>
                        <SectionItemText>Conta Universitária</SectionItemText>
                    </SectionItem>
                    <Divider />
                    <SectionItem>
                        <SectionItemText>Usar Código Promocional</SectionItemText>
                    </SectionItem>
                    <Divider />
                    <SectionItem>
                        <SectionItemText>Convide amigos</SectionItemText>
                    </SectionItem>
                </Section>

                <SectionTitle>Configurações</SectionTitle>
                <Section>
                    <SectionItem>
                        <SectionItemText>Alterar senha</SectionItemText>
                    </SectionItem>
                    <Divider />
                    <SectionItem>
                        <SectionItemText>Privacidade</SectionItemText>
                    </SectionItem>
                    <Divider />
                    <SectionItem>
                        <SectionItemText>Notificações</SectionItemText>
                    </SectionItem>
                </Section>
            </ScrollContainer>
        </Container>
    )
}

export default Settings;