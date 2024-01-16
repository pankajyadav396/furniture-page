import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import { Controller, EffectFade, Thumbs } from 'swiper/modules';
import image1 from '../assets/images/tmonial-img1.png'
import image2 from '../assets/images/tmonial-img2.png'
import image3 from '../assets/images/tmonial-img3.png'
import image4 from '../assets/images/tmonial-img4.png'
import image5 from '../assets/images/tmonial-img5.png'
import image6 from '../assets/images/tmonial-img6.png'
import image7 from '../assets/images/tmonial-img7.png'
const Teastimonial = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const TestimonialData = [
        {
            img: image1,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: image2,
            name: "creepi whoty",
            Profession: "vip-teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: image3,
            name: "preepi hhoty",
            Profession: "Cry-Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: image4,
            name: "ureepi nhoty",
            Profession: "Fry-Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: image5,
            name: "greepi thoty",
            Profession: "Two-Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: image6,
            name: "freepi photy",
            Profession: "Three-Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: image7,
            name: "vreepi khoty",
            Profession: "T-Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: image1,
            name: "mreepi bhoty",
            Profession: "Pti-Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: image4,
            name: "nreepi lhoty",
            Profession: "V-Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
    ]
    return (
        <div className='mx-auto px-3 max-w-[1320px] md:pt-[60px] pt-40px'>
            <div className='flex items-center gap-3' data-aos='fade-right'>
                <span className='w-[95px] h-[1px] border-black bg-black'></span>
                <p className='text-[#BD7D41] text-lg sm:text-xl font-Poppins font-normal headingLine'>Customer Says</p></div>
            <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-5 leading-normal'>Testimonial</h2>
            <div className='mt-[51px] mb-12 sm:mb-16 md:mb-20 lg:mb-[109px]' data-aos='fade-up'>
                <div>
                    <Swiper loop={true} spaceBetween={55} breakpoints={{ 450: { slidesPerView: 3, }, 700: { slidesPerView: 5, }, 1024: { slidesPerView: 7, }, }} centeredSlides={true} slidesPerView={1} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[Controller, Thumbs]} className="mySwiper2 ">
                        {
                            TestimonialData.map((items, index) => (
                                <SwiperSlide key={index}>
                                    <img className='sm:w-full w-1/2' src={items.img} alt="img" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='mt-[-50px]' data-aos='fade-up'>
                    <Swiper onSwiper={setThumbsSwiper} centeredSlides={false} loop={false} slidesPerView={1} fadeEffect={true} effect={'flip'} modules={[EffectFade, Thumbs]} autoplay={true} className="mySwiper flex justify-center items-center duration-300" >
                        {
                            TestimonialData.map((items, index) => (
                                <SwiperSlide key={index}>
                                    <h2 className='text-black text-lg font-Poppins font-semibold pt-2 leading-normal text-center'>{items.name}</h2>
                                    <p className='text-[#4D4D4D] text-xs font-Poppins pt-1 font-light leading-normal text-center'>{items.Profession}</p>
                                    <p className='text-black font-Poppins font-light leading-normal text-sm mt-3 max-w-[350px] mx-auto text-center'>{items.bio}</p>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Teastimonial