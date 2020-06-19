import React from 'react';

import{ Container,
  BoxProfile,
  ButtonHelp,
  ButtonHelpText,
  Profile,
  Avatar,
  ProfileUser,
  ProfileName,
  ProfileInfoText,
  ProfileInfo
} from './styles'


import userImg from '../../assets/user.jpg';

import ProfileList from '../../components/ProfilesList'
import { ScrollView } from 'react-native-gesture-handler';


export default function Home() {
  return (
    <Container >
      <ScrollView>
      <BoxProfile>

        <ButtonHelp>
          <ButtonHelpText>Ajuda</ButtonHelpText>
        </ButtonHelp>

        <Profile>
          <Avatar source={userImg} resizeMode="contain" />
          <ProfileUser>@mateussantana</ProfileUser>
          <ProfileName>Mateus Santana</ProfileName>
          <ProfileInfo>
            <ProfileInfoText>Ver meu perfil</ProfileInfoText>
          </ProfileInfo>
        </Profile>

        </BoxProfile>

        <ProfileList/>
      </ScrollView>
    </Container>
  );
}


