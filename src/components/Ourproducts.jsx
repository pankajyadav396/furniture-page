import map1 from '../assets/images/webp/sofa_1.webp'
import map2 from '../assets/images/webp/sofa_2.webp'
import map3 from '../assets/images/webp/sofa_3.webp'
import map4 from '../assets/images/webp/sofa_4.webp'
import map5 from '../assets/images/webp/sofa_5.webp'
import map6 from '../assets/images/webp/sofa_6.webp'
import Common from "./Common"
import Common2 from "./Common2"
import { Star } from "./Svg"

const Ourproducts = () => {
    const products = [
        { img: map1, singlesofa: "Single Sofa", lorempara: "Lorem ipsum dolor", review: (<Star />), amount: "₹ 1200.00", mapbtn: (<Common2 text="ADD TO CART" />) },
        { img: map2, singlesofa: "Single Sofa", lorempara: "Lorem ipsum dolor", review: (<Star />), amount: "₹ 1200.00", mapbtn: (<Common2 text="ADD TO CART" />) },
        { img: map3, singlesofa: "Single Sofa", lorempara: "Lorem ipsum dolor", review: (<Star />), amount: "₹ 1200.00", mapbtn: (<Common2 text="ADD TO CART" />) },
        { img: map4, singlesofa: "Single Sofa", lorempara: "Lorem ipsum dolor", review: (<Star />), amount: "₹ 1200.00", mapbtn: (<Common2 text="ADD TO CART" />) },
        { img: map5, singlesofa: "Single Sofa", lorempara: "Lorem ipsum dolor", review: (<Star />), amount: "₹ 1200.00", mapbtn: (<Common2 text="ADD TO CART" />) },
        { img: map6, singlesofa: "Single Sofa", lorempara: "Lorem ipsum dolor", review: (<Star />), amount: "₹ 1200.00", mapbtn: (<Common2 text="ADD TO CART" />) },
    ]
    return (
        <><div className='pt-[135px] pb-[169px] max-xl:py-[100px] max-md:py-[70px] max-sm:py-[50px] overflow-hidden'>
            <div className=' mx-auto  max-w-[1320px] px-3 '>
                <div className='flex gap-3 items-center'>
                    <span className="w-[95px] h-[0px] border border-black"></span>
                    <p className='text-[#BD7D41] text-lg sm:text-xl font-["poppins"] font-normal'>Shopping Store</p>
                </div>
                <div className='flex w-full flex-col gap-4 sm:flex-row  sm:justify-between items-start sm:items-center mt-4'>
                    <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-["poppins"] font-bold max-w-[436px] '>Our Products</h2>
                    <Common text="VIEW ALL PRODUCT" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full lg:gap-5 xl:gap-[27px] mt-8 sm:mt-10 md:mt-16 lg:mt-[108px]'>
                    {products.map((items, index) => (
                        <div key={index} className='w-full bg-white duration-300 shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] mb-4'>
                            <div className='sm:px-[23px] px-2 py-[18px]'>
                                <img className='w-full' src={items.img} alt={items.singlesofa} />
                                <div className='flex items-center justify-between mt-5'>
                                    <p className='text-black font-["poppins"] font-medium text-lg sm:text-xl leading-normal'>{items.singlesofa}</p>
                                    <span>{items.review}</span>
                                </div>
                                <p className='text-[#4D4D4D] text-base sm:text-lg font-["poppins"] font-normal mt-4 leadinxg-normal'>{items.lorempara}</p>
                                <div className='flex w-full items-center justify-between mt-4 pb-[35px]'>
                                    <p className='text-black text-xl sm:text-2xl lg:text-[28px] font-["poppins"] font-semibold leading-normal'>{items.amount}</p>
                                    {items.mapbtn}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}
  
export default Ourproducts