import React, {useState} from 'react';

import { ScrollView } from 'react-native'

import {Wrapper, Header, Title, ButtonConfig, ButtonConfigText} from "./styles";

import NotificationsList from '../../components/NotificationsList'

export default function Notifications() {
  
  return (
      <Wrapper>
       <ScrollView>
       <Header>
          <Title>Notificaçoes</Title>
          <ButtonConfig>
            <ButtonConfigText>Configurar</ButtonConfigText>
          </ButtonConfig>
        </Header>

        <NotificationsList/>
       </ScrollView>
      </Wrapper>
  );
}


