import { Tabs, Card, Center, UnstyledButton, Group, Avatar, Text, Grid,  } from '@mantine/core';

import React from 'react'

const tes = () => {
  return (
    <div>
     <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" >profile rt</Tabs.Tab>
        <Tabs.Tab value="messages" >profile ketua rt</Tabs.Tab>
        
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
      profile rt
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
      profile ketua rt
      </Tabs.Panel>
      <div>
                        <Card withBorder>
                            <Center>
                                <UnstyledButton>
                                    <Group>
                                        <div>
                                            <Avatar
                                                radius="xl" size={60}
                                                src='https://upload.wikimedia.org/wikipedia/ms/thumb/9/9f/Sunan_kali_jaga.jpg/300px-Sunan_kali_jaga.jpg'>BH</Avatar>

                                            <Text>Bob Handsome</Text>
                                            <Text size="xs" color="dimmed">Ketua RT 05/ RW 06</Text>
                                        </div>
                                    </Group>
                                </UnstyledButton>
                            </Center>
                        </Card>
                    </div>
                    <div>
                        <Card withBorder>
                            <Text fw={700} ta="center">Kontak</Text>
                            <Grid grow columns={24}>
                                <Grid.Col span={6}>
                                    <Text>Email</Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text>abcde@gmail.com</Text>
                                </Grid.Col>
                            </Grid>
                            <Grid grow columns={24}>
                                <Grid.Col span={6}>
                                    <Text>No Wa</Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text>08x-xxxx-xxxx</Text>
                                </Grid.Col>
                            </Grid>
                        </Card>
                    </div>
                    <div>
                        <Card withBorder>
                            <Text fw={700} ta="center">Alamat</Text>
                            <Text>Jl. Duren 4 Blok M no 14</Text>
                        </Card>
                    </div>
      
    </Tabs>

    </div>
  )
}

export default tes
