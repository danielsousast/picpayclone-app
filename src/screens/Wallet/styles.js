import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  background: #000;
  flex: 1;
`;

export const Scroll = styled.ScrollView`

`;

export const Header = styled(LinearGradient)`
    height: 260px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size:16px;
    font-weight: bold;
`;

export const BalanceContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;

export const Touch = styled.TouchableOpacity`

`;

export const Balance = styled.Text`
    color: #fff;
    font-size: 38px;
    margin-right: 15px;
`;

export const Description = styled.Text`
    color: #fff;
    font-size:16px;
    font-weight: bold;
`;

export const Actions = styled.View`
    flex-direction: row;
    margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255, 0.6);
    border-radius: 20px;
    margin: 0 10px;
    padding: 8px 0;
    width: 160px;
`;

export const ActionLabel = styled.Text`
    color: #fff;
    margin:0 8px;
    font-size: 16px;
`;

export const UserBalance = styled.View`
    background: #1c1c1e;
    height: 50px;
    flex-direction: row;
    padding: 0 16px;
    align-items: center; 
    justify-content: space-between;
`;

export const UserBalanceTitle = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`;

export const PaymentMethods = styled.View`

`;

export const PaymentMethodsTitle = styled.Text`
    text-transform: uppercase;
    color: #8e8e93;
    margin-top: 25px;
    padding: 0 16px;
`;

export const Card = styled.View`
    background: #1e232a;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
    flex-direction: row;
    margin-left: 15px;
    margin-right: 15px;
`;

export const CardLeft = styled.View`
    flex: 1;
    padding: 10px 0;
    margin-right: 15px;
`;

export const CardTitle = styled.Text`
    color: #fff;
    font-size: 18px;
`;

export const CardDescription = styled.Text`
    color: rgba(255,255,255, 0.7);
    margin-top: 10px;
`;


export const CardButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

export const CardButtonTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
    color: #0db060;
`;

export const CardImage = styled.Image`
    margin: 6px;
    width: 70px;
`;

export const TicketButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin:35px 0px;
    justify-content:center;
`;

export const TicketButtonTitle = styled.Text`
    color: #0db060;
    margin-left: 10px;
    font-size: 16px;
    text-decoration-line:underline; 
`;
