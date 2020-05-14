import React from 'react';

import { Container, Option, Title, Img } from './styles';
import image8 from '../../assets/img/08.png';
import image9 from '../../assets/img/09.png';
import image10 from '../../assets/img/10.png';
import image11 from '../../assets/img/11.png';
import image12 from '../../assets/img/12.png';

const images = [
    {
        key: String(Math.random()),
        lib: image8,
        title: 'Pague suas constas sem sair de casa',
        color: '#172c4e'
    },
    {
        key: String(Math.random()),
        lib: image9,
        title: 'Pague suas constas sem sair de casa',
        color:'#6a0159'
    },
    {
        key: String(Math.random()),
        lib: image10,
        title: 'Pague suas constas sem sair de casa',
        color:'#4139c8'
    },
    {
        key: String(Math.random()),
        lib: image11,
        title: 'Pague suas constas sem sair de casa',
        color:'#00ab4b'
    },
    {
        key: String(Math.random()),
        lib: image12,
        title: 'Pague suas constas sem sair de casa',
        color:'#ba2f76'
    },
]

const Tips = () => {
    return (
        <Container>
            {images.map(image => (
                <Option bgColor={image.color} key={image.key}>
                    <Title>Pague suas constas sem sair de casa</Title>
                    <Img source={image.lib} />
                </Option>
            ))}
        </Container>
    )
}

export default Tips;