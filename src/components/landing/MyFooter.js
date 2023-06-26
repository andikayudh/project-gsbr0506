import { UnstyledButton, Group, Avatar, Text, SimpleGrid, Center } from '@mantine/core';
import Link from 'next/link';


export default function MyButton() {
  return (

<SimpleGrid cols={5}>
      <div>
      <UnstyledButton>
      <Group>        
        <div>
          <Center>
        <Avatar src='https://thumbs.dreamstime.com/b/home-icon-button-simple-home-icon-web-button-editable-vector-illustration-isolated-white-background-158711752.jpg' size={40} color="blue">BH</Avatar></Center>
         <Center><Text size="xs" color="dimmed">home</Text></Center> 
        </div>
      </Group>
    </UnstyledButton>
      </div>
      <div><UnstyledButton>
      <Group>        
        <div>
          <Center>
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSHj2Wx1VELdDIkrotwagrgS7_3EPHBdGlndrHagOBeJet-Uqfj7TtNflqSjr0nzhLIE&usqp=CAU' size={40} color="blue">BH</Avatar></Center>
          <Center><Text size="xs" color="dimmed">info</Text></Center>
        </div>
      </Group>
    </UnstyledButton>
    </div>
      <div><UnstyledButton>
      <Group>        
        <div>
          <Center>
        <Avatar src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAAAYGBjy8vIaGhqYmJimpqbp6en8/Pzs7Ox8fHw3NzdcXFxXV1fJycmdnZ3Q0NAfHx+ysrK/v7/X19dpaWmCgoJjY2NMTEw8PDwODg739/cxMTEmJiZvb28NDQ3g4OCPj4+0tLQqKiqJiYlFRUXNzc11dXVRUVFuxyLzAAAMqklEQVR4nO2dCYOqKhTHIUtpmja3KbG0ve//CR8HcUNNciyb+/i/e981A+Qnh8MSCkJaWlpaWlpaWlpaWoOJxI75GbIX8Qv4rMMWf5AuS6NfPjIZGqmitd0r4X5onjodegT8vBLkMnsDdHh6WzO2PkSueeJZcnsCpBtI7Yv2lFwvmn5Dnn56Sm3RZ2J9ydj0WIhffRpEb+JVpydns/3AImR1J2TZmveSFNn1d7P61A/L1qWXlIwxS2rSS1K9CirPjPSRkiYcSppQXZpwKGlCdX00oSH0q07zJxNGp12i8OLZVteUPpmwrHPHmY2/Q4gvcaeU6ggN26nW8djOLxCby6LMOI9YirMyS7ZFS+lOr3aaQM3laghZvXwKLc1UlRDGxD/yNWEYuSgcl3VN0mK9eL8Q55h9k6X7naa78qJC/OrgBgh3B6Gzl4z6K7nqSMgBZMOFUbcnjqszV/uMKJjmcS6FOGm6yUiUykUU1xHO8o/0wIN1mYGrIUwmbhblcJvCnfaqXiCPmMeL4eM6J15mKKSSQuG+FAiLRWZDsLBDITYS7spGLxNGRSPzjBwpTyuZwztmn70si/Ls3i4P1EiY1MxrJWB3QqluyIR3a5opuxcwMP/OolwS+vQjhbp0gyMrSf+aJVFTMlXCODeWngjx8iFhnb1ABT2lvHGSSlYxXfjEJ0F5nfp6bHA1vTaYb9krQZX0gBCvCieVCM2iIS1FKqkF2mmSBAr30lKjagjnJQtR1iPCU6EqKhGusmJiHJu0koovb2mKViQbSI1qCMGdd5icaiAMwlIdUiTkVU1E4kYJLCNhprM0BW6+i5roRb2e0F4XygMpEvIZMuHRuZHecjO1MkdrlV1svV5OiOMjL4OsKqoR8maAN+rkDrC8uBLvsMhKDro+iVN9oNcTukn7s02rohrhIisezubzXO24mZ5zg+V9Iqcufq53EBrbvACqhPWXmq7TKMukyOwMGcp0k4Ti9yE4PvSmDYR3N1U8VRwXNxMil3db7HrCk5/rnJcHePRZGj40kBUIZM6edsvv3MlubhB34tSOGBoICxrN/DZ31UaYNG9RXEtYVuY3wBaxJYz0CyW+B/qmq6JluqXIu0OlV6pCCPpW+EnpEWFSYS5GO6FXirvIjFS08444kY0Wr2EpelStlGqEKqONh4QGtGGJbT0mzBKwRAQInjTvo+QGwM0qjIYsaQRW6VGrErZ5rBZCdOWJHGsIgzDX7JxXergn88RIb1m+Asp/LSu1EKvJzxYiB/wSoWyoDYQXJ5M55zFH8a8IE+OCqqjmS5O+WWCYqZGKyuzEjRZlHEeZobQTli672GH5vj1PmFjkhiq2h8k4Hy8gM+OkYLnd3o7FNCW54GbXUiEqtYdW+CBZVULeAWHDsrsiIS8sr9hrAWMKeTVsasAKJZ5JrcU/4kruK2ojFNNO17kiIYHO9ygquICkzcGlfnxZvNGUTFiNkMJA7N5MB2olTKriKVQkzBxtNgtipV6vcQmQcaqWhGKvDdrfsCldkXorIflJs6hEaIrAuQOYizONcyy8RZH4FQmhqz9+PI3aTois9TOEVxE4b6dMqVArcsrhud5KmM0AKxEmrkkMKLjiZFqucQIihhiB9MvLewnRoUo4z68usX5LRpqeKS1pyeIQel3L4UFvJiTzCuHpO9P8p1SHJpKRpmZamCr+KkTmHUM8joclRPFYJizLlKOPildN5hUzs6U165ErkxqvJ4xR9ZzC2AKJ1q3c9kF3YSsBFxWpzHn3SDhlzdNGdiRQFdNG2axksWSmeyz3UOzSNehFvj9xNV8vJUTu/la9punlGOZPWctSVqjvyUMa01sWumzxLY/qnc3afuVrCT9BmlBIEyJNOJw0oZAmRJpwOGlCIU2INOFw0oRCvyCk3Z4drJ/WjtuebYwrK4BfTTj1T5VRrpJONSt54017POxJ9+bFhKtRNz5QWBnQ3pTivXNGGMUdCzDRTLa4n/Y4uLJI6rWEaje9UV/SJZz2KBiv4zcS8jnq3fJoP63jBFIby+4mbk+qsiDjpYR8Er/15/F65euAf6l3zwgri68jWbWHa5UmFNKESBM+LU2oLE0opAmRJnxamlBZmlBIE6I3EdJWVdYf/SlCw5/Nto91uiwlxj9FeMAqGnRd2xOqI5w3YxXUbfXlZxDaSoTSBf8UITr6rTrIcf4WYRdpQiFNiDTh09KEytKEQpoQacKnpQmVpQmFNCHShE/r/0lIjt6P91jzm/x6hD9FWH3Epk7S85d/ivDfn6c5KBH+5bk2et606i6/jeBPETKRNlVi/DXC56UJhTQh0oRPSxMqSxMKaUKkCZ+WJlSWJhTShKh5rX7H3fn+xlp9C04Fh/K785VknuFxorU8FnLZN481MeUHbT76mRn59Xmf98wMsna/ATzJr0Csf6OjrHfO0zCzmnUHvFR8VN1GDlUdq5Fe+fyhcdiORx203k6ql7PmQVu8YCRvwPiGp2SNaQc1XKtDRP0csJAmRJpwOGlCIU2INOFw0oRCmhBpwuGkCYU0IWogjBfOYvU+LRzHled2XkpI1Abl/WrTZeeAroSrAQDf+waef5/wt7OJnfRWK0XEXbxbK/mtPbq1ENKESBMOJ00opAmRJhxOmlBIEyJNOJw0oZAmRA2E1Iqt9l+m+1NsvflXbnOGcbB+ozDe+e98A091P6Z3SFpm5qsRHti53eOtjynselbaEi3bSO69kt6UfK4Swj5Se1QNdnoImOw5eS5Dq7x/u2+N4mrhrMvm546qyx5hSmmLHquyjS2zXPv5RXu/VGXlHn8xkUQ9XcihCFhu47aDQvC27coeZMOLL1RtfV0z32ZYXikoi5tDzcbYA4vvXnpoC9W8zXBB6U7an6bi1q6N4rvlti1J5utl2wp6AEGDuGuzLXCvzfubpoLKGj5uUoZQ3farsqawJFluQKoyler022Up5J7fherukLJ4bd30lK8eBRYIe54/ELQD48rmH/VJdV2b/0LxAnroIHiL0ra1Ooj/mraL+8lXfzK2NY1+SZ5yM8AL8efjWn3uIBq3KxeFfFdKasr3HD63B3yv6OyhI7FOjUVYWcFt8CddsNlpabeSWpusWjmPqg/lL6OQ90Phqnv8IVIfBHTS2Ov0LBSvPtv628OXU5xqHWlU9ziAAB11egZBQd3mghJDvNd1Rw48w/Um3JQFrtYnI7ozdmmPksH4JZbP02SpQYPraMhBlBbjy8qxS2VM3l87NsuO/prs7N3UMW/KQFoXo+A1kN06FeL1PXMnN1VXrGjymm5Zfs2gbJO5u4mCFmsNIgVzlgLhvdFhIzdjKbI1853YsuLr8i4yKc/O1RCut9udlCVV3xjOFB5vC2dr1fQeaBzUno7MJr6cMLiDy5Vuu+JlY5WXPxl8NvM1mj96ijejmR2deZA4UW5F/ECN0VUhtPhc3yu0tR92MTPCLSOM8CSm8YGRBcvYYAfB3LGXhsF82ME52MaUzxOwMIvzkZ1b24ax2CSEh6MThldqiYJaOucVdaE74cfU9fHONoj7ilWOs69FSxc6I9wQdGNDX8L+c3Cw4gdHNuhk8QkjuCYHMeZh2KGBQ+hCQCxGeIPHmg1iEMRuSxAww+UvS+IukwU3Q0opc/ZBJnxpeRhYRceF1T5CyAkp2nuILL7YAN/7Ygf+iqBvjxDHnxIXL+CA3S7/G5GVbxNqAOrSt5CBXbIw2G1h3/iH4wSPx2N2yjgfCdrDudmBkPl2SswwGGeK2qcbelKR0LORFeDI9+8OYYUVGMj8IXTDysFihDDCtMhxgoyQdeJZGbIPrIfh+4FLKPs2CBGh7jmpxS5xYLrHXxK6cl3KvMyU/S14sYEIjwwswKMxvpIVO7CAkA09TSAE24WML9GUHdhAyAwzwEmBERoG+H6lhHetIk44o+jLZIVNDYONVz6CcO8jej7dKPEniHydDswmGeElISR0v/MpWt6Ybe7mLNt4Raab8EiNk4vsmN2Si7+fsXPjyfKWEvo+/O7hmeblMwhveEoI/BnPDMLKhZWoVyCEr+glgAAU6iHzQtQAd8TaQ5Zf/8K6UMxjYhjKuSghjGJiuAZyg08gBK+4jRHs9hrhOfjJOGQU9MLq4ZQRwi+z1MPRhn1FYkTZgBN6h0do8W28QjSEjoUx54Qxs9YZYU3gDBrj1S5gLf5yWELeuLP/bW4bGDRF+H67sIMIhlDQ7izIFe+9CMNX3zeYUYBewc9tx//F8DfA4Y3dgfRjniIkxM8MS5iBig5yuafM2kOXD6Z47rKBY1TuTge4ZkAd1A4zhyNsED6b59rpgK76OELZyP5Bwr6lCTWhsv4DkFZNiSknc1cAAAAASUVORK5CYII=' size={40} color="blue">BH</Avatar></Center>
          <Center><Text size="xs" color="dimmed">berita</Text></Center>
        </div>
      </Group>
    </UnstyledButton>
    </div>
      <div><UnstyledButton>
      <Group>        
        <div>
          <Link href={'/sos'}>
       <Center> <Avatar src='https://www.pngarts.com/files/16/Emergency-Transparent.png' size={40} color="blue">BH</Avatar></Center>
          <Center><Text size="xs" color="dimmed">emergensi</Text></Center>
          </Link>
        </div>
      </Group>
    </UnstyledButton>
    </div>
      <div><UnstyledButton>
      <Group>        
        <div>
          <Center>
        <Avatar src='https://www.pngkey.com/png/detail/44-448187_download-user-icon-png-clipart-computer-icons-user.png' size={40} color="blue">BH</Avatar></Center>
         <Center><Text size="xs" color="dimmed">profile</Text></Center>
        </div>
      </Group>
    </UnstyledButton>
    </div>
    

    </SimpleGrid>


    
    
    

    
  );
}