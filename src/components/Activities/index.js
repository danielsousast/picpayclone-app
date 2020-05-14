import React from 'react';
import { 
    Container, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    CardBody, 
    Avatar, 
    Description, 
    Strong, 
    UserName, 
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel
} from './styles';

import avatar from '../../assets/img/avatar.png';
import Icon from 'react-native-vector-icons/Feather';

const Activities = () => {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                
                <CardHeader>
                    <Avatar source={avatar}/>
                    <Description>
                        <Strong>Você</Strong> pagou a <Strong>Carlos Sousa</Strong>
                    </Description>
                </CardHeader>
               
                <CardBody>
                    <UserName>Daniel de Sousa</UserName>
                </CardBody>
               
                <CardFooter>
                    <Details>
                        <Value>R$ 20.00</Value>
                        <Divider />
                        <Icon name="lock" color="#fff" size={14}/>
                        <Date>Há 01 mês</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <Icon name="message-square" color="#fff" size={14}/>
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <Icon name="heart" color="#fff" size={14}/>
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>

            </Card>
        </Container>
    )
}

export default Activities;