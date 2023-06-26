import React from 'react'
import { Image, Text, Container, Card, Center, Grid, Button, Badge, Notification } from '@mantine/core'
import Link from 'next/link'

export default function thanks() {
    return (
        <div>
            
                <Notification>
                <Image src='https://media.istockphoto.com/id/1152053025/id/vektor/ikon-kartu-identitas-ilustrasi-vektor-kerangka-bisnis.jpg?s=612x612&w=0&k=20&c=l-PNf4L9tiu_osnPgBDYdLPkJybQ9O_B8NzyEEAYALU='></Image>
                <Text>terima kasih sudah mengupload tanda identitas tamu, silakan kembali kemenu utama</Text>
                </Notification>
           

            <div>
                <Card>
                    <Grid columns={24}>
                        <Grid.Col span={12}>
                            <div style={{ width: 210 }}>
                                <Link href={'/'}>
                                    <Badge variant="filled" fullWidth>
                                        kembali ke menu utama
                                    </Badge>
                                </Link>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <div style={{ width: 210 }}>
                                <Link href={'/'}>
                                    <Badge variant="filled" fullWidth>
                                        kembali
                                    </Badge>
                                </Link>
                            </div>
                        </Grid.Col>
                    </Grid>
                </Card>
            </div>

        </div>
    )
}
