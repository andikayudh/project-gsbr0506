import React from 'react'
import { Card, Badge, Grid, Text, } from '@mantine/core'
import Link from 'next/link'


export default function bayar() {
  return (
    <div>
      




      <div>
                <Card>
                    <Grid columns={24}>
                        <Grid.Col span={12}>
                            <div style={{ width: 180 }}>
                                <Link href={'/thanks'}>
                                    <Badge variant="filled" fullWidth>
                                        upload
                                    </Badge>
                                </Link>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <div style={{ width: 180 }}>
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
