import React from 'react'
import Shopnowbtn from './Common'
import Topnav from './Topnav'

const Herosec = () => {
    return (
        <>
            <div className='bg-[url(./assets/images/webp/heroimg.webp)] bg-cover bg-no-repeat md:h-[932px] h-[700px] bg-center overflow-hidden'>
                <Topnav />
                <div className='flex flex-col justify-center md:pt-[11rem] sm:pt-24 pt-16' data-aos="fade-up" data-aos-delay="00">
                    <h1 className='mx-auto max-w-[908px] leading-normal text-center text-white text-3xl md:text-5xl font-bold font-["Poppins"]'>Awesome Design Best Furniture For Your Interior</h1>
                    <p className='pt-4 text-center text-white text-base sm:text-xl font-normal font-["Poppins"] mb-[51px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
                    <div className='flex justify-center'>
                        <Shopnowbtn text="SHOP NOW" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosec