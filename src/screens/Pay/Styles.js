import styled from 'styled-components/native';

export const Container = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const PayInputView = styled.View`
  flex-direction: row;
  align-items: center;
  color: #fff;
  width: 350px;
  height: 40px;
  padding: 0 20px;
  border-radius: 25px;
  background: rgba(255,255,255,0.5);
`;

export const PayInput = styled.TextInput`
  padding: 0 20px;
  color: #fff;
  font-size: 16px;

  &::placeholder {
    color :#fff;
  }
`;