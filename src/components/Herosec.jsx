import React from 'react'
import Shopnowbtn from './Common'
import Topnav from './Topnav'

const Herosec = () => {
    return (
        <>
            <div className='bg-[url(./assets/images/webp/heroimg.webp)] bg-cover bg-no-repeat vh-100 md:h-[932px] h-[700px] bg-center overflow-hidden'>
                <Topnav />
                <div className='flex flex-col justify-center items-center pt-354 lg:pt-[9rem] md:pt-[11rem] sm:pt-24 pt-16'>
                    <h1 className='mx-auto max-w-[908px] leading-normal text-center text-white text-[35px ] md:text-[48px] font-bold font-["Poppins"]' data-aos="zoom-in">Awesome Design Best Furniture For Your Interior</h1>
                    <p className='pt-4 text-center text-white text-base sm:text-xl font-normal font-["Poppins"] mb-[51px]' data-aos="zoom-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
                    <div className='flex justify-center'>
                        <Shopnowbtn text="SHOP NOW" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosec