import styled from 'styled-components/native';

export const Container = styled.View`
background: #000;
  flex:1;
`;

export const Header = styled.View`
    height:50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
    color:#fff;
  font-size: 18px;
`;

export const HeaderButton = styled.TouchableOpacity`
   justify-content:center;
   align-items: center;
`;

export const HeaderButtonTitle = styled.Text`
    color:#0db060;
`;

export const Notifications = styled.ScrollView`
  background: #1e222b;

`;

export const MessageContainer = styled.TouchableOpacity`
    margin: 0 16px;
    padding: 12px 0;
`;

export const Message = styled.Text`
    color:rgba(255,255,255,0.6);
    font-size: 16px;
    font-weight:200;
    margin: 10px 0;
    
`;

export const Date = styled.Text`
    color:rgba(255,255,255,0.4);
`;

export const Divider = styled.View`
    height: 1px;
    background: rgba(255,255,255,0.2);
    width: 90%;
    margin: auto;
`;