import React from 'react'
import HighlightCard from '../components/HighlightCard';
import TransactionCard from '../components/TransactionCard';

import { Avatar, Container, Header, Icon, User, UserGreeting, UserInfo, UserName, UserWrapper, HighlightCards, Transactions, Title, TransactionList } from './styles';
import { TransactionCardProps } from '../components/TransactionCard/index';

export interface DataListProps extends TransactionCardProps {
  id: number;
}

export default function Dashboard() {

  const transactions: DataListProps[] = [{
    id: 1,
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: { name: 'Vendas', icon: 'dollar-sign' }, 
    date: '13/04/2020'
  },
  {
    id: 2,
    type: 'negative',
    title: 'Hamgueria Pizzy',
    amount: 'R$ 59,00',
    category: { name: 'Alimentação', icon: 'coffee' }, 
    date: '13/04/2020'
  },
  {
    id: 3,
    type: 'negative',
    title: 'Aluguel do apartamento',
    amount: 'R$ 1.200,00',
    category: { name: 'Casa', icon: 'shopping-bag' }, 
    date: '13/04/2020'
  }]

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

      <Transactions>
          <Title>Transações</Title>

          <TransactionList
            data={transactions}
            renderItem={({ item }) => <TransactionCard data={item} />}
            keyExtractor={item => item.id.toString()}
          />
      </Transactions>
    </Container>
  )
}