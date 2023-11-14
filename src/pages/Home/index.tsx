import React from 'react'
import Header from '../../components/Header'
import { Center } from './styles'

export default function Home() {
  return (
    <div style={{ justifyContent: 'center', display: 'flex'}}>
      <Center>
        <Header />
      </Center>
    </div>
  )
}
