import React from 'react';

import { Wrapper, Header,BelanceContainer,BalanceTitle,Balance,Container } from './styles'

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home() {
  return (
    <Wrapper >
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>

          <BelanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BelanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e"/>
        </Header>

        <Suggestions/>
        <Activities/>
        <Tips/>
        <Banner/>
      </Container>
   
    </Wrapper>
  );
}


