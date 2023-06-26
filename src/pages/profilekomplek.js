import React from 'react'
import { SimpleGrid, UnstyledButton, Text, Group, Avatar, Center, Grid, Card, ActionIcon, Container, Badge, Image, List, ThemeIcon, AspectRatio, Tabs } from '@mantine/core'
import { BiArrowBack } from "react-icons/bi";
import Link from 'next/link';


export default function profilekomplek() {
  return (
    <div>
      <div>
        <Link href={'/'}>
          <ActionIcon>
            <BiArrowBack size={18} />
          </ActionIcon>
        </Link>
      </div>


      <Tabs color="teal" defaultValue="first">
        <Tabs.List>
          <Tabs.Tab value="first">profile rt</Tabs.Tab>
          <Tabs.Tab value="second" color="blue">
            profile ketua rt
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first" pt="xs">
          <Text fz="xs">
            Perumahan Griya soka 1b bogor RT 05 RW 06 terletak di kelurahan desa sukaraja kecamatan sukaraja kabupaten bogor kode pos 16710
          </Text>
          <Text fz="xs">
            adapun warga berjumlah 350 kk, dan ruko 10 dan 340 rumah yang terdiri dari blok :
            <>
              <Grid columns={24}>
                <Grid.Col span={5}>
                  <List
                    size="sm"
                    center
                    icon={''}>
                    <List.Item><Text fz="xs">blok ruko</Text></List.Item>
                    <List.Item><Text fz="xs">blok I</Text></List.Item>
                    <List.Item><Text fz="xs">blok J</Text></List.Item>
                    <List.Item><Text fz="xs">blok K</Text></List.Item>
                    <List.Item><Text fz="xs">blok L</Text></List.Item>
                    <List.Item><Text fz="xs">blok M</Text></List.Item>
                  </List>
                </Grid.Col>
                <Grid.Col span={6}>
                  <List
                    size="sm"
                    center
                    icon={'-'}>
                    <List.Item><Text fz="xs">10 ruko</Text></List.Item>
                    <List.Item><Text fz="xs">24 rumah</Text></List.Item>
                    <List.Item><Text fz="xs">24 rumah</Text></List.Item>
                    <List.Item><Text fz="xs">24 rumah</Text></List.Item>
                    <List.Item><Text fz="xs">24 rumah</Text></List.Item>
                    <List.Item><Text fz="xs">24 rumah</Text></List.Item>
                  </List>
                </Grid.Col>
                <Grid.Col span={5}>
                  <List
                    size="sm"
                    center
                    icon={''}>
                    <List.Item><Text fz="xs">blok N</Text></List.Item>
                    <List.Item><Text fz="xs">blok O</Text></List.Item>
                    <List.Item><Text fz="xs">blok P</Text></List.Item>
                    <List.Item><Text fz="xs">blok Q</Text></List.Item>
                    <List.Item><Text fz="xs">blok S</Text></List.Item>
                    <List.Item><Text fz="xs">blok T</Text></List.Item>
                  </List>
                </Grid.Col>
                <Grid.Col span={8}>
                  <List
                    size="sm"
                    center
                    icon={'-'}>
                    <List.Item><Text fz="xs">24 rumah</Text></List.Item>
                    <List.Item><Text fz="xs">24 rumah</Text></List.Item>
                    <List.Item><Text fz="xs">24 rumah</Text></List.Item>
                    <List.Item><Text fz="xs">24 rumah</Text></List.Item>
                    <List.Item><Text fz="xs">24 rumah</Text></List.Item>
                    <List.Item><Text fz="xs">24 rumah</Text></List.Item>
                  </List>
                </Grid.Col>
                <div>
                  <Text>Fasilitas yang ada meliputi :</Text>
                  <List>tempat ibadah - Masjid dalam komplek</List>


                </div>
              </Grid>
            </>
          </Text>


        </Tabs.Panel>

        <Tabs.Panel value="second" pt="xs">
          <div>
            <Card withBorder>
              <Center>
                <UnstyledButton>
                  <Group>
                    <div>
                      <Center>
                        <Avatar
                          radius="xl" size={60}
                          src='https://upload.wikimedia.org/wikipedia/ms/thumb/9/9f/Sunan_kali_jaga.jpg/300px-Sunan_kali_jaga.jpg'>BH</Avatar>
                      </Center>
                      <Center>
                        <Text>Bob Handsome</Text>
                      </Center>
                      <Center>
                        <Text size="xs" color="dimmed">Ketua RT 05/ RW 06</Text>
                      </Center>
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
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}
