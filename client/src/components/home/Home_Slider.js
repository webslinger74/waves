import React from 'react';
import Slider from 'react-slick';
import MyButton from '../Inputs/Button';
import file1 from '../../images/featured/featured_home.jpg';
import file2 from '../../images/featured/featured_home_2.jpg';

const HomeSlider = (props) => {
   
    const slides = [
        {
            img: file1,
            lineOne:'Fender',
            lineTwo:'Custom Shop',
            linkTitle:'Show Now',
            linkTo:'/shop'
        },
        {
            img: file2,
            lineOne:'B-Stock',
            lineTwo:'Awesome Discounts',
            linkTitle:'View Offers',
            linkTo:'/shop'
        }   
    ]
   
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        arrows: false
    }
   
  const generateSlides = () => (
       slides ? slides.map((item, i) => (
       <div key={i}>
            <div className="featured_image"
                style={{
                    background:`url(${item.img})`,
                    height:`${window.innerHeight}px`
                }}>

                <div className="featured_action">
                        <div className="tag title">{item.lineOne}</div>
                        <div className="tag low_title">{item.lineTwo}</div>
               <div>
                   <MyButton
                    type="default"
                    title={item.linkTitle}
                    linkTo={item.linkTo}
                    />
               </div>
                </div>


                </div>
       
       </div>))
       : null
   )
   
   
   
    return ( 

        <div className="featured_container">

        <Slider {...settings} >
            {generateSlides()}
        </Slider>

        </div>

     );
}
 
export default HomeSlider;