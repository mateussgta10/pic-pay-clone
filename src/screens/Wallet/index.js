import React, {useState} from 'react';

import { Feather,AntDesign, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import {StatusBar, Switch,ScrollView} from 'react-native'

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Bold,
  Value,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UserBalance,
  UserBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddLabel,
  AddButton,
  UserTicketButton,
  UserTicketLabel,
  UserTicketContainer

  
} from "./styles";

import creditCard from '../../assets/credit-card.png'

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }
  return (
      <Wrapper>
        <ScrollView>
           {/* <StatusBar barStyle="light-content" backgroundColor="#52e78c" /> */}
        <Header 
          colors={
            useBalance ? ['#52e78c', '#1ab563'] :  ['#d3d3d3', '#868686']
          }>
          <HeaderContainer>
            <Title>Saldo PicPay</Title>

            <BalanceContainer>
              <Value>
                R$ <Bold>{ isVisible ? '0,00' : '----'}</Bold>
              </Value>

              <EyeButton onPress={handleToggleVisibility}>
                <Feather name={isVisible ? 'eye' : 'eye-off' } size={28} color="#fff"/>
              </EyeButton>
            </BalanceContainer>

            <Info>
              Seu saldo está rendendo 100% do CDI
            </Info>

            <Actions>

              <Action>
                <MaterialCommunityIcons name="cash" size={28} color="#fff"/>
                <ActionLabel>Adicionar</ActionLabel>
              </Action>

              <Action>
                <FontAwesome name="bank" size={20} color="#fff"/>
                <ActionLabel>Retirar</ActionLabel>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>

        <UserBalance>
          <UserBalanceTitle>
            Usar saldo ao pagar
          </UserBalanceTitle>
          
          <Switch 
            value={useBalance}
            onValueChange={handleToggleUseBalance}
          />
        </UserBalance>

        <PaymentMethods>
          <PaymentMethodsTitle>
            Forma de pagamento
          </PaymentMethodsTitle>

          <Card>
            <CardBody>
              <CardDetails>
                <CardTitle>
                  Cadastre seu cartão de crédito
                </CardTitle>
                <CardInfo>
                  Cadastre seu cartão crédito para poder fazer pagamentos mesmo 
                  quando não tiver saldo no PicPay
                </CardInfo>
              </CardDetails>

              <Img source={creditCard} resizeMode="contain"/> 
            </CardBody>

            <AddButton>
              <AntDesign name="pluscircleo" size={30} color="#0db060"/>
              <AddLabel>
                Adicionar cartão de crédito
              </AddLabel>
            </AddButton>
          </Card>

          <UserTicketContainer>
            <UserTicketButton>
              <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060"/>
              <UserTicketLabel>Usar código promocional</UserTicketLabel>
            </UserTicketButton>
          </UserTicketContainer>

        </PaymentMethods>
        </ScrollView>
      </Wrapper>
  );
}


