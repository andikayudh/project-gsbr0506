import React from 'react'
import { Radio, Text, Badge, Grid, Textarea, Card, TextInput, Select } from '@mantine/core'
import Link from 'next/link'


const sos = () => {
    return (
        <div><Text fz='sm' fw={'bold'}>Form Emergensi</Text>

            <Grid columns={24}>
                <Grid.Col span={12}>
                    <div>
                        <Radio.Group
                            name="favoriteFramework"
                            orientation="vertical"
                            label="berita di tujukan kepada"
                            spacing="xs"
                            size="xs"
                            
                        >
                            <Radio value="react" label="ketua RT" />
                            <Radio value="svelte" label="Petugas keamanan" />
                            <Radio value="ng" label="ketua RT & petugas keamanan" />
                            <Radio value="vue" label="seluruh warga" />
                        </Radio.Group>
                    </div>
                </Grid.Col>
                <Grid.Col span={8}>
                    <div>
                        <Select
                         spacing="xs"
                         size="xs"
                        
                            label="Permintaan donor darah"
                            placeholder="Pilih salah satu"
                            data={[
                                { value: 'react', label: 'A' },
                                { value: 'ng', label: 'B' },
                                { value: 'svelte', label: 'AB' },
                                { value: 'vue', label: 'O' },
                            ]}
                        />
                    </div>
                </Grid.Col>
            </Grid>

            <div>
                <Card></Card>
                <Textarea fz={'xs'}
      placeholder="tulis berita singkat"
      label="berita darurat"
          />
            </div>
            <div>
                <div>
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
                </div>
            </div>
            <div>
                <Card></Card>
                <Grid columns={24}>
                    <Grid.Col span={12}>
                        <div style={{ width: 200 }}>
                            <Badge variant="filled" fullWidth>
                                lapor
                            </Badge>
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

    )
}

export default sos
