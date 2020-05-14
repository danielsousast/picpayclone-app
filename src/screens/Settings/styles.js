import styled from 'styled-components/native';

export const Container = styled.View`
  background: #000;
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView`
`;

export const Header = styled.View`
    height: 250px;
    background: #000;
    align-items:center;
    ;justify-content:center;
`;

export const Avatar = styled.Image`
    height: 120px;
`;

export const UserName = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
`;

export const FullName = styled.Text`
    font-size: 16px;
    color: rgba(255,255,255,0.6);
    margin-top:5px;
`;


export const SectionTitle = styled.Text`
    color: #0db060;
    margin: 16px;
    font-weight: 500;
`;

export const Section = styled.View`
    background: #1e222b;
`;

export const SectionItem = styled.TouchableOpacity`
    padding: 10px 16px;
`;

export const SectionItemText = styled.Text`
    color: #fff;
`;

export const SectionItemDescription = styled.Text`
    color: rgba(255,255,255,0.6);
`;

export const Divider = styled.View`
    height: 0.5px;
    background: rgba(255,255,255,0.2);
    width: 100%;
    margin: auto;
`;


