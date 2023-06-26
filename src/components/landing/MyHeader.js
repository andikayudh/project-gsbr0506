import { Card, Grid, Text, } from "@mantine/core";
import Link from "next/link";


export default function App() {
  return (
    <div>  

        <Grid>
          <Grid.Col span={6}>
            <Text
              color={'green'}
              size={'sm'}>Warga Soka RT 05/ RW 06</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Link href={'/daftar'}>
              <Text
                color={'green'}
                size={'sm'}
                ta="right">Warsoo</Text>
            </Link>
          </Grid.Col>
        </Grid>
      
    </div>
  );

}