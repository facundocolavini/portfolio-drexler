import React from 'react';
import './Slider.scss'
import zyro2 from'../../assets/illustrations/zyro-image_2.png';
import project1 from '../../assets/illustrations/project_1.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore,{ Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';


SwiperCore.use([Navigation]);


const Slider = () => {
  return (
    <div className='Slider' id="projects">
        <div className='left'>
            <div className="box-content-1">
                <h2 className="about-title ">Mis</h2>
                <h2 className="about-title about-title--variant">Proyectos</h2>
            </div>
            <img className='imga' src={zyro2} alt="zyro2"/>
        </div>  
        <div className='right'>
            <Swiper
                spaceBetween={100}
                slidesPerView={1.7}
                slidesPerGroup={1}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide><img className='imgb' src={project1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='imgb' src={project1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='imgb' src={project1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='imgb' src={project1} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    </div>
  );
};

export default Slider;


