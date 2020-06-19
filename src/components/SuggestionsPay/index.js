import React from 'react';
// import { MaterialIcons } from '@expo/vector-icons';
// import {TouchableWithoutFeedback} from 'react-native'
import {Wraper, Container, Options ,Img, Label, Title} from './styles'

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
    label: 'Recarga'
  },
  {
    key: String(Math.random()),
    img: img2,
    label: 'Uber'
  },
  {
    key: String(Math.random()),
    img: img3,
    label: 'Transporte'
  },
  {
    key: String(Math.random()),
    img: img4,
    label: 'Sky'
  },
  {
    key: String(Math.random()),
    img: img5,
    label: 'Doações'
  },
  {
    key: String(Math.random()),
    img: img6,
    label: 'Pagar'
  },
  {
    key: String(Math.random()),
    img: img7,
    label: 'Enviar'
  },
]


export default function SuggestionsPay() {
  return (
    <Wraper>
      <Title>Segestões para Você</Title>
      <Container>
      {items.map((item) => (
        <Options key={item.key}>
        <Img source={item.img} />
        <Label>{item.label}</Label>
      </Options>
      ))}
    </Container>
    </Wraper>

  )
}

