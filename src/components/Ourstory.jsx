import sofa from '../assets/images/webp/explorevideoimg.webp'
import Common from "./Common";
import { Pause } from './Svg'

const Ourstory = () => {
    return (
        <div className='overflow-hidden pt-20 sm:pt-[134px] pb-12 sm:pb-200 md:pb-[160px] lg:pb-[266px]'>
            <div className='container max-w-[1320px] mx-auto px-3'>
                <div className='grid grid-cols-1 md:grid-cols-2 w-full items-center lg:items-start'>
                    <div className='relative flex justify-center md:justify-start'>
                        <span className='flex max-w-[200px] bgImg sm:max-w-[300px] lg:max-w-[416px] min-h-[150px] sm:min-h-[250px] lg:min-h-[336px] bg-gradient-to-l from-[#8C939B] to-[#243040] w-full absolute -top-10 sm:-top-[64px]  md:left-0 -z-10 -translate-x-[30%] md:-translate-x-0 max-xs:ml-5'></span>
                        <div className='md:pl-[50px] max-w-[250px] sm:max-w-[350px] h-full lg:max-w-[506px] w-full max-h-[250px] sm:max-h-[350px] lg:max-h-[498px] relative'>
                            <img className='h-full img w-full max-h-[250px] sm:max-h-[350px] lg:max-h-[498px]' src={sofa} alt="sofa" />
                            <div className='img absolute flex bg-white -bottom-[2px] -right-[2px]'>
                                <div className='p-2 sm:p-3 md:p-4 flex items-center gap-2'>
                                    <p className=' text-[#243040] font-["poppins"] font-normal text-xs relative after:absolute after:w-10 sm:after:w-[50px] md:after:w-[66px] after:h-[1px] after:top-1/2 after:right-0 pr-12 sm:pr-[62px] md:pr-[78px] after:bg-[#243040]'>Explore Video</p>
                                    <Pause />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:ml-5 mt-10 md:mt-0 w-full'>
                        <p className='text-[#BD7D41] text-lg sm:text-xl font-["poppins"] font-normal headingLine'>Welcome Our Story</p>
                        <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-["poppins"] font-bold max-w-[436px] mt-3 md:mt-4 lg:mt-5'>We create the product you tell us you wish existed.</h2>
                        <p className='text-[#4D4D4D] mb-5 sm:mb-7 md:mb-[34px] text-base sm:text-lg font-["poppins"] font-normal max-w-[586px] mt-3 md:mt-4 lg:mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</p>
                        <Common text="READ MORE" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourstory