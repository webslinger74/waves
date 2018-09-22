import React from 'react';
import MyButton from '../Inputs/Button';
import file1 from '../../images/featured/featured_home_3.jpg';

const HomePromotion = (props) => {
   
    const promotion = {
        
            img: file1,
            lineOne:'Up to 40% off',
            lineTwo:'In second hand guitars',
            linkTitle:'Show Now',
            linkTo:'/shop'
        
    }
   
   
   
   const renderPromotion = () => (
       promotion ? 
       <div className="home_promotion_img"
       style={{background: `url(${promotion.img})`}}
   >
        <div className="tag title">{promotion.lineOne}</div>
        <div className="tag low_title">{promotion.lineTwo}</div>
        <div>
            <MyButton 
                type="default"
                title={promotion.linkTitle}
                linkTo={promotion.linkTo}
                addStyles={{
                    margin: '10px 0 0 0'
                }}
            />
        </div>



   </div>
   :null
   
   )
   
   
   
    return ( 
        <div className="home_promotion">
            {renderPromotion()}
        </div>
     )
}
 
export default HomePromotion;