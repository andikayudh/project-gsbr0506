import React from 'react'
import { Badge, Grid } from '@mantine/core';
import Link from 'next/link';

export default function MyBadge() {
  return (
    <div>
       <div>
                        <Grid columns={24}>
                            <Grid.Col span={12}>
                                <div style={{ width: 200 }}>
                                    <Badge variant="filled" fullWidth>
                                        laporan ipl
                                    </Badge>
                                </div>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <div style={{ width: 200 }}>
                                    <Link href={'/'}>
                                    <Badge variant="filled" fullWidth>
                                        laporan keuangan rt
                                    </Badge>
                                    </Link>
                                </div>
                            </Grid.Col>
                        </Grid>
                    </div>
    </div>
  )
}
