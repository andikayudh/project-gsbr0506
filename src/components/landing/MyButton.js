import { UnstyledButton, Group, Avatar, Text, SimpleGrid, Center, Tabs, } from '@mantine/core';
import Link from 'next/link';


export default function MyButton() {
  return (
    <div>




      <SimpleGrid cols={4}>
        <div>
          <Center>
            <UnstyledButton>
              <Group>
                <Center>
                  <div>
                    <Link href={'/profilekomplek'}>
                      <Avatar src='https://bogorraya.co.id/residential/assets/img/Bogor%20Raya%20Residential%20Logo.png' size={40} color="blue">BH
                      </Avatar>
                      <Center>
                      <Text size="xs" color="red">profile rt</Text>
                      </Center>
                    </Link>
                  </div>
                </Center>
              </Group>
            </UnstyledButton>
          </Center>
        </div>
        <div>
          <Center>
            <UnstyledButton>
              <Group>
                <div>
                  <Link href={'/NginepForm'}>
                    <Center>
                      <Avatar src='https://pbs.twimg.com/profile_images/1047325339314057218/0X6NMAUp_400x400.jpg' size={40} color="blue">BH
                      </Avatar>
                    </Center>
                    <Center>
                      <Text size="xs" color="red">tamu 1x24 jam</Text>
                    </Center>
                  </Link>
                </div>
              </Group>
            </UnstyledButton>
          </Center>
        </div>
        <div>
          <Center>
            <UnstyledButton>
              <Group>
                <div>
                  <Link href={'/iplForm'}>
                    <Center>
                      <Avatar src='https://e7.pngegg.com/pngimages/1021/33/png-clipart-car-price-money-payment-service-car-service-payment.png' size={40} color="blue">BH

                      </Avatar>
                    </Center>
                    <Center>
                    <Text size="xs" color="red">bayar ipl</Text></Center>

                  </Link>
                </div>
              </Group>
            </UnstyledButton>
          </Center>
        </div>
        <div>
          <Center>
            <UnstyledButton>
              <Group>
                <div>
                  <Center>
                    <Avatar src='https://nusrumbung.or.id/wp-content/uploads/2019/08/donasi-1-1.png' size={40} color="blue">BH</Avatar></Center>
                  <Center>
                    <Text size="xs" color="red">open donasi</Text></Center>
                </div>
              </Group>
            </UnstyledButton>
          </Center>
        </div>
        <div>
          <Center>
            <UnstyledButton>
              <Group>
                <div>
                  <Center>
                    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV8TG2SmnL8SGD3KGOFa-ePy8DDxQErzT0Lw&usqp=CAU' size={40} color="blue">BH</Avatar></Center>
                  <Center>
                  <Text size="xs" color="red">keluhan warga</Text></Center>
                </div>
              </Group>
            </UnstyledButton>
          </Center>
        </div>
        <div>
          <Center>
            <UnstyledButton>
              <Group>
                <div>
                  <Center>
                    <Avatar src='https://mediaini.com/wp-content/uploads/2021/06/blt-umkm.jpg' size={40} color="blue">BH</Avatar></Center>
                  <Center>
                    <Text size="xs" color="red">umkm</Text></Center>
                </div>
              </Group>
            </UnstyledButton>
          </Center>
        </div>
        <div>
          <Center>
            <UnstyledButton>
              <Group>
                <div>
                  <Link href={'/suratrt'}>
                  <Center>
                    <Avatar src='https://img2.pngdownload.id/20180403/bbe/kisspng-financial-statement-finance-report-computer-icons-budget-5ac3b15f06deb2.0161310615227743670281.jpg' size={40} color="blue">BH</Avatar></Center>
                  <Center>
                  <Text size="xs" color="red">Surat Pengantar</Text></Center>
                  </Link>
                </div>
              </Group>
            </UnstyledButton>
          </Center>
        </div>
        <div>
          <Center>
            <UnstyledButton>
              <Group>
                <div>
                  <Center>
                    <Avatar src='https://play-lh.googleusercontent.com/ohoZzxdpzupS6qOrSgudmEZ4InEH5q42ym2Rfh92MG6JbiMFNuO6p0PYyAQBlht49cmz' size={40} color="blue">BH</Avatar></Center>
                  <Center>
                  <Text size="xs" color="red">kependudukan</Text></Center>
                </div>
              </Group>
            </UnstyledButton>
          </Center>

        </div>



      </SimpleGrid>
    </div>







  );
}