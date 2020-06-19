import React from 'react';

import{ Container, ProfileListSingle, ProfileTitle, ProfileInfo } from './styles'


export default function Home() {
  return (
    <Container >
      <ProfileListSingle>
        <ProfileTitle>Meu PicPay</ProfileTitle>
        <ProfileInfo>@mateussantana</ProfileInfo>
      </ProfileListSingle>

      <ProfileListSingle>
        <ProfileTitle>Meu Número</ProfileTitle>
        <ProfileInfo>(**) ****</ProfileInfo>
      </ProfileListSingle>

      <ProfileListSingle>
        <ProfileTitle>Meu E-mail</ProfileTitle>
        <ProfileInfo>example@gmail.com</ProfileInfo>
      </ProfileListSingle>


      <ProfileListSingle>
        <ProfileTitle>Dados pessoas</ProfileTitle>
        <ProfileInfo>Nome, CPF e data de nascimento</ProfileInfo>
      </ProfileListSingle>

      <ProfileListSingle>
        <ProfileTitle>Conta Bancária</ProfileTitle>
      </ProfileListSingle>
    </Container>
  );
}


