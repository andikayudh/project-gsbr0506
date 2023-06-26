import React, { Component } from 'react'
import { Carousel } from '@mantine/carousel';
import { Text, Card, Image } from '@mantine/core';

export default class MyCarousel extends Component {
    render() {
        return (
            <div>
               <Text fw={700}>Woro-woro</Text>
               <Text td="underline" fz="xs">informasi terbaru</Text>
                <Carousel sx={{ maxWidth: 320 }} mx="auto" withIndicators height={200}>
                    <Carousel.Slide>
                    <Card
      shadow="sm"
      p="xl"
      component="a"
      
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          height={160}
          alt="No way!"
        />
      </Card.Section>

      <Text weight={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>

                    </Carousel.Slide>
                    <Carousel.Slide>
                    <Card
      shadow="sm"
      p="xl"
      component="a"
    
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          height={160}
          alt="No way!"
        />
      </Card.Section>

      <Text weight={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>
                    </Carousel.Slide>
                    <Carousel.Slide><Card
      shadow="sm"
      p="xl"
      component="a"
    
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          height={160}
          alt="No way!"
        />
      </Card.Section>

      <Text weight={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card></Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide>
                    {/* ...other slides */}
                </Carousel>
            </div>
        )
    }
}
