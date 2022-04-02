import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import QRCode from 'react-native-qrcode'

import {
  Container,
  Code,
  Nav,
  NavItems,
  NavText,
  SignOutButton,
  SignOutText
} from './styles'

export default function Menu() {
  return (
    <Container>
      <Code>
        {/* <QRCode value="https://google.com" size={80} fgColor="#FFF" bgColor="#8B10AE" /> */}
      </Code>

      <Nav>
        <NavItems>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me Ajuda</NavText>
        </NavItems>
        <NavItems>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItems>
        <NavItems>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItems>
        <NavItems>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItems>
      </Nav>

      <SignOutButton>
        <SignOutText>SAIR DO APP</SignOutText>
      </SignOutButton>
    </Container>
  )
}
