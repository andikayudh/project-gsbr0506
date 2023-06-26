import React from 'react'
import { Text, Table, Checkbox, Grid, TextInput, Card, Badge, } from '@mantine/core'
import Link from 'next/link';


const elements = [

    { pilih: <Checkbox />, bulan: 'januari', Rp: 80000, wafat: 10000 },
    { pilih: <Checkbox />, bulan: 'februari', Rp: 80000, wafat: 10000 },
    { pilih: <Checkbox />, bulan: 'maret', Rp: 80000, wafat: 10000 },
    { pilih: <Checkbox />, bulan: 'april', Rp: 80000, wafat: 10000 },
    { pilih: <Checkbox />, bulan: 'mei', Rp: 80000, wafat: 10000 },
    { pilih: <Checkbox />, bulan: 'juni', Rp: 80000, wafat: 10000 },
    { pilih: <Checkbox />, bulan: 'juli', Rp: 80000, wafat: 10000 },
    { pilih: <Checkbox />, bulan: 'agustus', Rp: 80000, wafat: 10000 },
    { pilih: <Checkbox />, bulan: 'september', Rp: 80000, wafat: 10000 },
    { pilih: <Checkbox />, bulan: 'oktober', Rp: 80000, wafat: 10000 },
    { pilih: <Checkbox />, bulan: 'november', Rp: 80000, wafat: 10000 },
    { pilih: <Checkbox />, bulan: 'desember', Rp: 80000, wafat: 10000 },
];

const IplForm = () => {
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.pilih}</td>
            <td>{element.bulan}</td>
            <td>{element.Rp}</td>
            <td>{element.wafat}</td>
        </tr>
    ));


    return (
        <div>
            <Text fz='xs' fw={'bold'}>Form bayar ipl</Text>

            <div>
                <Grid columns={24}>
                    <Grid.Col span={12}>
                        <TextInput
                            placeholder="ketik blok"
                            label=" gsbr 1b Blok"
                        ></TextInput>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <TextInput
                            placeholder="ketik nomor rumah"
                            label="nomor rumah"
                        ></TextInput>
                    </Grid.Col>
                </Grid>
                <Grid columns={24}>
                    <Grid.Col span={12}>
                        <TextInput
                            placeholder="ketik nama"
                            label="nama"
                        ></TextInput>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <TextInput
                            placeholder="no hp/wa"
                            label="nomor wa"
                        ></TextInput>
                    </Grid.Col>
                </Grid>

            </div>




            <Table verticalSpacing="xs" fontSize="xs" withBorder withColumnBorders>
                <thead>
                    <tr>
                        <th>pilih</th>
                        <th>bulan</th>
                        <th>Rp.</th>
                        <th>kewafatan</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>

            <div>
                <Card>
                    <Grid columns={24}>
                        <Grid.Col span={12}>
                            <div style={{ width: 180 }}>
                                <Link href={'/bayar'}>
                                    <Badge variant="filled" fullWidth>
                                        bayar
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

export default IplForm
