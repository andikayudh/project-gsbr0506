import { Container, SimpleGrid, Card } from '@mantine/core'

import { Carousel } from '@mantine/carousel'

import React from 'react'
import { MyHeader,  } from '../components/landing'
import MyCarousel from '../components/landing/MyCarousel'

import MyFooter from '../components/landing/MyFooter'
import MyButton from '../components/landing/MyButton'
import MyBadge from '../components/landing/MyBadge'


const index = () => {
    return (
        <div>
            <Container>
            <SimpleGrid cols={1}>
      <div><MyHeader /></div>        
      <div><MyCarousel /></div>
      <Card></Card>
      <div><MyButton /></div>
     <div><MyBadge /></div>
      <div><MyFooter /></div>
    </SimpleGrid>

            
            
            
            
            </Container>
        </div>
    )
}

export default index
