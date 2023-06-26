import React from 'react'
import { Text, TextInput, Grid } from '@mantine/core'

export default function isiankk() {
  return (
    <div>
      <Text fz={'xm'}>form isian kependudukan</Text>
      

<div>
      <Grid columns={24}>
      <Grid.Col span={6}>Nama kepala kelurga</Grid.Col>
      <Grid.Col span={18}>
        <TextInput></TextInput></Grid.Col>      
    </Grid>
    </div>
    
    <Grid columns={24}>
        <div>
      <Grid.Col span={6}>Alamat</Grid.Col>
      <Grid.Col span={18}>
        <TextInput></TextInput></Grid.Col> 
        </div>
        <Grid columns={24}>
            
      <Grid.Col span={6}>RT/RW</Grid.Col>
      <Grid.Col span={18}>
        <Text>05/06</Text></Grid.Col>    
          
    </Grid>  
    <Grid columns={24}>
      <Grid.Col span={6}>kelurahan</Grid.Col>
      <Grid.Col span={18}>
        <Text>Sukaraja</Text></Grid.Col>      
    </Grid>

    </Grid>
    </div>
  )
}
