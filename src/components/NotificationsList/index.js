import React from 'react';

import {ScrollView} from 'react-native'

import {Container, NotificationsC, Title, Bold, Date} from "./styles";



export default function Notifications() {
  
  return (
    <Container>
     <ScrollView>
     <NotificationsC>
        <Title>A <Bold>transferência</Bold> de R$ 450,00 para sua conta bancária
        <Bold>foi concluída</Bold>
        </Title>

        <Date>16 de jun ás 11:54</Date>
      </NotificationsC>

      <NotificationsC>
        <Title>A <Bold>transferência</Bold> de R$ 980,00 para sua conta bancária
        <Bold>foi concluída</Bold>
        </Title>

        <Date>16 de jun ás 11:54</Date>
      </NotificationsC>

      <NotificationsC>
        <Title>A <Bold>transferência</Bold> de R$ 450,00 para sua conta bancária
        <Bold>foi concluída</Bold>
        </Title>

        <Date>16 de jun ás 11:54</Date>
      </NotificationsC>

      <NotificationsC>
        <Title>A <Bold>transferência</Bold> de R$ 450,00 para sua conta bancária
        <Bold>foi concluída</Bold>
        </Title>

        <Date>16 de jun ás 11:54</Date>
      </NotificationsC>

      <NotificationsC>
        <Title>A <Bold>transferência</Bold> de R$ 450,00 para sua conta bancária
        <Bold>foi concluída</Bold>
        </Title>

        <Date>16 de jun ás 11:54</Date>
      </NotificationsC>


      <NotificationsC>
        <Title>A <Bold>transferência</Bold> de R$ 450,00 para sua conta bancária
        <Bold>foi concluída</Bold>
        </Title>

        <Date>16 de jun ás 11:54</Date>
      </NotificationsC>

      
     </ScrollView>
    </Container>
  );
}


