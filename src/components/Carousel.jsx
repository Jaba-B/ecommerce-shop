import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import carouselMock from '../mocks/carousel.mock'
import {AiOutlineArrowRight} from 'react-icons/ai'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
    const { className, onClick } = props
    return (
      <div className={className} onClick={onClick}>
        <AiOutlineArrowRight className="carousel-arrow right-arrow p-2.5 w-9 h-9 border  rounded-full bg-inherit hover:bg-white hover:bg-opacity-50 sm:bg-lightModeBg cursor-pointer sm:right-2" />
      </div>
    )
}

const PrevArrow = (props) => {
    const { className, onClick } = props
    return (
      <div className={className} onClick={onClick}>
        <AiOutlineArrowRight className="carousel-arrow ml-[-17px] p-2.5 w-9 h-9 border  rounded-full bg-inherit hover:bg-white hover:bg-opacity-50 sm:bg-lightModeBg right-16 cursor-pointer sm:right-2 rotate-180" />
      </div>
    )
}

export function Carousel() {
  const sliderRef = useRef()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 2000,
            settings: {
              nextArrow: <NextArrow />,
              prevArrow: <PrevArrow />,
              appendDots: dots => (
                <div className="w-[100px] h-auto flex justify-center items center">
                  <ul style={{ margin: '0px' }}> {dots} </ul>
                </div>
              ),
              customPaging: () => (
                <div
                  style={{
                    height: '2.5px',
                  }}
                ></div>
              ),
            },
          },
          {
            breakpoint: 640,
            settings: {
              appendDots: dots => (
                <div
                  style={{
                    backgroundColor: 'transparent',
                    borderRadius: '10px',
                    padding: '10px',
                    display: 'flex',
                  }}
                >
                  <PrevArrow onClick={() => { sliderRef.current.slickPrev()}} />
                  <ul style={{ margin: '0px', backgroundColor: 'transparent' }}> {dots} </ul>
                  <NextArrow onClick={() => { sliderRef.current.slickNext() }} />
                </div>
              ),
              customPaging: i => (
                <div
                  style={{
                    width: '30px',
                  }}
                >
                  {i + 1}
                </div>
              ),
            },
          },
        ],
      }
    return(
        <div className="bg-blue w-full flex justify-center">
            <Slider {...settings}
                className="carousel-wrapper w-72 h-[340px] sm:w-96 sm:h-96 bg-white rounded-xl"
                ref={sliderRef}
            >
                {carouselMock.map((product) => {
                        return(
                        <div key={product.id} className="relative" >
                            <img src={product.src} alt='product' className='absolute top-[-10px] w-[288px] sm:w-[384px] h-[340px] sm:h-[370px] rounded-xl'/>
                            <div className='absolute w-full mx-auto top-[280px] left-[104px] sm:top-[305px] sm:left-[150px]'>
                                <Link to={`/products/${product.id}`} className="flex justify-center items-center mt-2 text-white w-[80px] h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all">Details</Link>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carousel