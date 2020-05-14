import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16
    }
})`
    margin-top: 15px;
`;

export const Option = styled.TouchableOpacity`
    background: ${({bgColor}) => bgColor || '#CCC'};
    width: 150px;
    height: 220px;
    border-radius: 8px;
    padding: 15px;
    justify-content: space-between;
    margin-right: 15px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const Img = styled.Image`
    align-self: center;
`;