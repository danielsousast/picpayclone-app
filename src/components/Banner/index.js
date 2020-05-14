import React from 'react';

import { Container, Details, Img, Title, Description } from './styles';
import image13 from '../../assets/img/13.png'

const Banner = () => {
    return (
        <Container>
            <Details>
                <Title>Cobre um amigo</Title>
                <Description>
                    Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças
                </Description>
            </Details>
            <Img source={image13} />
        </Container>
    )
}

export default Banner;