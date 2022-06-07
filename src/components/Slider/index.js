import React from 'react'
import Carousel from 'react-material-ui-carousel'
import P1 from '../../assets/images/p1.png'
import P2 from '../../assets/images/p2.png'
import P3 from '../../assets/images/p3.png'
import Item from './Item'

export default function Index() {
  const data = [
    {
      id: 1,
      title: 'کفش اول',
      image: P1,
      price: '65,000',
      subtitle: 'این زیر عنوان کفش است',
      discount: 15
    },
    {
      id: 2,
      title: 'کفش دوم',
      image: P2,
      price: '60,000',
      subtitle: 'این زیر عنوان کفش است',
      discount: 15
    },
    {
      id: 3,
      title: 'کفش سوم',
      image: P3,
      price: '70,000',
      subtitle: 'این زیر عنوان کفش است',
      discount: 15
    }
  ]
  return (
    <Carousel>
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  )
}
