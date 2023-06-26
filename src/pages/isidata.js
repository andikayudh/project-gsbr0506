import React from 'react'
import { Text, Input, Container, TextInput, InputBase, Grid, Autocomplete } from '@mantine/core'

const isidata = () => {
    return (
        <div>
            <Container>
                <Text>isi data</Text>

                <div>
                    <>
                        <Autocomplete
                            label="status rumah"
                            placeholder="pilih salah satu"
                            data={['rumah sendiri', 'kontrak', 'indekos',]}
                        />
                        <TextInput
                            size="xs"
                            label="nama lengkap"
                            placeholder="isi nama lengkap"
                        />
                        <TextInput
                            size="xs"
                            label="nomor NIK"
                            placeholder="isi 16 digit"
                        />
                        <TextInput
                            size="xs"
                            label="no telp./ no wa"
                            placeholder="isi nama lengkap"
                        />

                        <Grid grow columns={24}>
                            <Grid.Col span={12}>
                            <Autocomplete
                            label="Alamat Rumah GSBR"
                            placeholder="pilih blok"
                            data={['ruko', 'blok I', 'blok J', 'blok K', 'blok L', 'blok M', 'blok N', 'blok O','blok P','blok Q','blok R','blok S','blok T',]}
                        />
                            </Grid.Col>
                            <Grid.Col span={12}>
                            <Autocomplete
                            label="nomor rumah"
                            placeholder="pilih blok"
                            data={['01', '02', '03', '03A', '04', '05', '06', '07','08','09','10','11','12','12A', '14', '15','16','17', '18', '19']}
                        />

                            </Grid.Col>

                        </Grid>








                        <TextInput
                            size="xs"
                            label="Alamat GSBR"
                            placeholder="isi blok"
                        />



                    </>
                </div>
            </Container>
        </div>
    )
}

export default isidata
