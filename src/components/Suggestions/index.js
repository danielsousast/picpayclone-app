import React from 'react';
import { Container, Option, Img, Label } from './styles';

import image1 from '../../assets/img/01.png';
import image2 from '../../assets/img/02.png';
import image3 from '../../assets/img/03.png';
import image4 from '../../assets/img/04.png';
import image5 from '../../assets/img/05.png';
import image6 from '../../assets/img/06.png';
import image7 from '../../assets/img/07.png';

const images = [
    {
        key: String(Math.random()),
        img: image1,
        label: 'Recarga'
    },
    {
        key: String(Math.random()),
        img: image2,
        label: 'Uber'
    },
    {
        key: String(Math.random()),
        img: image3,
        label: 'Ônibus'
    },
    {
        key: String(Math.random()),
        img: image4,
        label: 'TV'
    },
    {
        key: String(Math.random()),
        img: image5,
        label: 'Central de Doações'
    },
    {
        key: String(Math.random()),
        img: image6,
        label: 'Pagar Conta'
    },
    {
        key: String(Math.random()),
        img: image7,
        label: 'Cobrar'
    }
]

const Suggestions = () => {
    return (
        <Container>
            {images.map(image => (
                <Option key={image.key}>
                    <Img source={image.img} />
                    <Label>{image.label}</Label>
                </Option>
            ))}
        </Container>
    )
}

export default Suggestions;