import React from 'react';
// import { MaterialIcons } from '@expo/vector-icons';
// import {TouchableWithoutFeedback} from 'react-native'
import {Wraper, Container, Options ,Img, LabelContainer, Label,LabelDescription, Title} from './Styles'

import img1 from '../../assets/01.png';
import img2 from '../../assets/02.png';
import img3 from '../../assets/03.png';
import img4 from '../../assets/04.png';
import img5 from '../../assets/05.png';
import img6 from '../../assets/06.png';
import img7 from '../../assets/07.png';

const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: 'Recarga',
    labelDescription: 'Pague sua conta de luz, água, boletos'
  },
  {
    key: String(Math.random()),
    img: img2,
    label: 'Uber',
    labelDescription: 'Pague sua conta de luz, água, boletos'
    
  },
  {
    key: String(Math.random()),
    img: img3,
    label: 'Transporte',
    labelDescription: 'Pague sua conta de luz, água, boletos'
  },
  {
    key: String(Math.random()),
    img: img4,
    label: 'Sky',
    labelDescription: 'Pague sua conta de luz, água, boletos'
  },
  {
    key: String(Math.random()),
    img: img5,
    label: 'Doações',
    labelDescription: 'Pague sua conta de luz, água, boletos'
  },
  {
    key: String(Math.random()),
    img: img6,
    label: 'Pagar',
    labelDescription: 'Pague sua conta de luz, água, boletos'
  },
  {
    key: String(Math.random()),
    img: img7,
    label: 'Enviar',
    labelDescription: 'Pague sua conta de luz, água, boletos'
  },
]


export default function Services() {
  return (
    <Wraper>
      <Title>Serviços</Title>
      <Container>
      {items.map((item) => (
        <Options key={item.key}>
        <Img source={item.img} />
        
        <LabelContainer>
          <Label>{item.label}</Label>
          <LabelDescription>{item.labelDescription}</LabelDescription>
        </LabelContainer>
      </Options>
      ))}
    </Container>
    </Wraper>

  )
}

