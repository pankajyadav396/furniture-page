import React from 'react'
import Ourproducts from '../components/Ourproducts'
import Sofaset from '../components/Sofaset'
import Footer from '../components/Footer'
import Offsec from '../components/Offsec'
import Latestslider from '../components/Latestslider'
import Ourstory from '../components/Ourstory'
import Sliderfirst from '../components/Sliderfirst'
import Testimonial from '../components/Teastimonial'
const Homepage = () => {
  return (
    <div>
      <Ourstory />
      <Sliderfirst />
      <Ourproducts />
      <Sofaset />
      <Latestslider />
      <Offsec />
      <Testimonial />
    </div>
  )
}

export default Homepage