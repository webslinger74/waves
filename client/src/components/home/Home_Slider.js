import React from 'react';
import Slider from 'react-slick';
import MyButton from '../Inputs/Button';

const HomeSlider = (props) => {
   
    const slides = [
        {
            img: './images/featured/featured_home.jpg',
            lineOne:'Fender',
            lineTwo:'Custom Shop',
            linkTitle:'Show Now',
            linkTo:'/shop'
        },
        {
            img: './images/featured/featured_home_2.jpg',
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
        arrow: false
    }
   
  const generateSlides = (sliders) => (
       sliders ? sliders.map((item, i) => (
       <div key={i}>
            <div className="featured_image"
                style={{
                    background:`url(${item.img})`,
                    height:`${window.innerHeight}px`
                }}>

                <div className="featured_action">
                
                </div>


                </div>
       
       </div>))
       : null
   )
   
   
   
    return ( 

        <div className="featured_container">

        <Slider {...settings} >
            {generateSlides(slides)}
        </Slider>

        </div>

     );
}
 
export default HomeSlider;