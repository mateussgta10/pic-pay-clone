import styled from 'styled-components/native';

export const Wraper = styled.View`
  background: #1e222b;
  height: 180px;
`;

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  }
}))`
`;

export const Options = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;
export const Img = styled.Image``;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
`;


export const Title = styled.Text`
  color :#fff;
  padding: 10px 8px;
`;