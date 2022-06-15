import React from 'react'
import HighlightCard from '../components/HighlightCard';

import { Avatar, Container, Header, Icon, User, UserGreeting, UserInfo, UserName, UserWrapper, HighlightCards } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/34848657?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Mateus</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard title='Entradas' amount='R$ 17.400,00' lastTransaction='Última entrada dia 13 de abril' type='up' />
        <HighlightCard title='Saídas' amount='R$ 1.259,00' lastTransaction='Última entrada dia 3 de abril' type='down'/>
        <HighlightCard title='Total' amount='R$ 16.141,00' lastTransaction='Última entrada dia 13 de abril' type='total' />
      </HighlightCards>
    </Container>
  )
}