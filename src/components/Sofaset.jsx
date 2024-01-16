import React from 'react'
import Sofaimg from '../assets/images/webp/sofa-img-sofaset.webp'
import Common from './Common'
const Sofaset = () => {
  return (
    <>
      <div className='pb-[80px] overflow-hidden'>
        <div className='bg-[#F7F7F8] pt-[78px]'>
          <div className='max-w-[1320px] container px-3 mx-auto'>
            <div className="row justify-center">
              <div className='lg:w-1/3 px-3 pt-3' data-aos='fade-right'>
                <div className='flex items-center gap-[7px]'>
                  <div className="w-[95px] h-[0px] border border-black"></div>
                  <p className="text-center text-yellow-600 sm:text-xl text-lg font-normal text-nowrap font-['Poppins']">Shopping Store</p>
                </div>
                <p className="max-w-[436px] mb-[53px] text-slate-800 sm:text-[35px]  text-[25px] font-bold font-['Poppins'] mt-6">Wooden Sofa Starts From ₹ 1200.00</p>
                <Common text="SHOP NOW" />
              </div>
              <div className='lg:w-7/12  relative z-[1] px-3 mt-8 lg:mt-0' data-aos='fade-left'>
                <img src={Sofaimg} alt="sofaimg" className='lg:w-full max-lg:max-w-[500px] w-full' />
                <div className="w-[741px] h-[270px] max-sm:h-[180px] max-sm:bottom-[-40px] bg-slate-800 lg:right-[-43%] right-[-80%] bottom-[-65px] absolute z-[-1]" />
              </div>
            </div>
          </div >
        </div >
      </div>
    </>
  )
}

export default Sofaset