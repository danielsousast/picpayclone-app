import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${({focused}) => focused ? '#000' : '#fff'};
    font-size: 12px;
`;

export const Touch = styled.TouchableWithoutFeedback`
    
`;
