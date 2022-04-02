import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Animated } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler';


import {Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './src/components/Main/styles'

import Header from './src/components/Header'
import Tabs from './src/components/Tabs'
import Menu from './src/components/Menu'

export default function App() {
  const translateY = new Animated.Value(0)

  const AnimatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translateY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  )

  function onHandlerStateChanged(event){

  }

  return (
    <Container>
      <StatusBar style="light-content" backgroundColor="#8B10AE" />
      <Header/>
      <Content>
        <Menu translateY={translateY}/>

        <PanGestureHandler
        onGestureEvent={AnimatedEvent}
        onHandlerStateChange={onHandlerStateChanged}>

        <Card style={{
          transform: [{
            translateY: translateY.interpolate({
              inputRange: [-350, 0, 380],
              outputRange: [-50, 0,380],
              extrapolate: 'clamp',
            }),
          }],
        }}
        >
          <CardHeader>
            <Icon name='attach-money' size={28} color='#666' />
            <Icon name='visibility-off' size={28} color='#666' />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 199.732,93</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida
            </Annotation>
          </CardFooter>
        </Card>
        </PanGestureHandler>

      </Content>
      <Tabs />
    </Container>
  )
}
