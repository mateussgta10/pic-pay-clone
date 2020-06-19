import React from 'react';

import {Container, Header,PayInputView, PayInput} from './Styles';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import SuggestionsPay from '../../components/SuggestionsPay';
import Services from '../../components/Services';
export default function Pay() {
  return (
    <Container >
     <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>
        <PayInputView>
          <AntDesign name="search1" size={20} color="#fff" />
          <PayInput placeholder="Quem você quer pagar?"></PayInput>
        </PayInputView>
      </Header>

      <SuggestionsPay/>

      <Services/>
    </Container>
  );
}


