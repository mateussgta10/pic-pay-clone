import styled from 'styled-components/native';

export const Wraper = styled.View`
  background: #1e222b;
  height: 180px;
  flex: 1;
`;

export const Container = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  }
}))`
`;

export const Options = styled.TouchableOpacity`
  flex: 1;
  /* margin-right: 16px; */
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;
export const Img = styled.Image`
  /* margin-top: 10px; */
`;

export const Title = styled.Text`
  color :#fff;
  font-size: 17px;
  padding: 2px 8px;
`;

export const LabelContainer = styled.View`
  flex-direction: column;
  flex: 1;
  margin-left: 24px;
`;
export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 8px;
  font-size: 15px;
`;

export const LabelDescription = styled.Text`
  color: rgba(255,255,255,0.5);
  font-weight: bold;
  margin-top: 2px;
  font-size: 14px;
`;
