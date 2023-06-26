import React from 'react'
import { TextInput, Text, Container, Autocomplete, Center, Grid, Card, Badge } from '@mantine/core'
import Link from 'next/link'


const NginepForm = () => {
    return (
        <div>
            <Container>
                <Center>
                    <Text fw={700}>Form Lapor Tamu Menginap 1 x 24 Jam </Text>
                </Center>
                <div>
<Card></Card>
                    <Grid columns={24}>
                        <Grid.Col span={14}>
                            <TextInput size='xs'
                                label="Nama pelapor"
                                placeholder="Custom layout"
                            />
                        </Grid.Col>
                        <Grid.Col span={10}>
                            <TextInput size='xs'
                                label="No Wa"
                                placeholder="Custom layout"
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid columns={24}>
                        <Grid.Col span={14}>
                            <TextInput size='xs'
                                label="Alamat di GSBR"
                                placeholder="tulis blok"
                            />
                        </Grid.Col>
                        <Grid.Col span={10}>
                            <TextInput size='xs'
                                label="no rumah"
                                placeholder="tulis nomor rumah"
                            />
                        </Grid.Col>
                    </Grid>

                    <Center>
                        <Text> Data Tamu</Text>
                    </Center>

                    <Grid columns={24}>
                        <Grid.Col span={14}>
                            <TextInput size='xs'
                                label="Nama tamu"
                                placeholder="Custom layout"
                            />
                        </Grid.Col>
                        <Grid.Col span={10}>
                            <TextInput size='xs'
                                label="No Wa/No Telp"
                                placeholder="Custom layout"
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid columns={24}>
                        <Grid.Col span={14}>
                            <TextInput size='xs'
                                label="Alamat "
                                placeholder="tulis alamat"
                            />
                        </Grid.Col>
                        <Grid.Col span={10}>
                            <TextInput size='xs'
                                label="kota"
                                placeholder="tulis kota"
                            />
                        </Grid.Col>
                    </Grid>

                    <Grid columns={24}>
                        <Grid.Col span={14}>
                            <Autocomplete size='xs'
                                label="hubungan kekerabatan"
                                placeholder="pilih salah satu"
                                data={['ortu', 'anak', 'temen', 'pembantu']}
                            />
                        </Grid.Col>
                        <Grid.Col span={10}>
                            <TextInput size='xs'
                                label="Jumlah orang yg menginap"
                                placeholder="Custom layout"
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid columns={24}>
                        <Grid.Col span={14}>
                            <TextInput size='xs'
                                label="keperluan"
                                placeholder="tulis blok"
                            />
                        </Grid.Col>
                        <Grid.Col span={10}>
                            <TextInput size='xs'
                                label="rencana inap berapa hari"
                                placeholder="tulis nomor rumah"
                            />
                        </Grid.Col>
                    </Grid>
                    <div>
                        <Card></Card>
                    </div>

                    <div>
                        <Grid columns={24}>
                            <Grid.Col span={12}>
                                <div style={{ width: 200 }}>
                                    <Link href={'/uploadktp'}>
                                    <Badge variant="filled" fullWidth>
                                        lapor
                                    </Badge>
                                    </Link>
                                </div>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <div style={{ width: 200 }}>
                                    <Link href={'/'}>
                                    <Badge variant="filled" fullWidth>
                                        kembali
                                    </Badge>
                                    </Link>
                                </div>
                            </Grid.Col>
                        </Grid>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NginepForm
