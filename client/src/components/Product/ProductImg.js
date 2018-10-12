import React, { Component } from 'react';
import image_not_avail from '../../images/image_not_availble.png';
import ImageLightBox from './ImageLightBox';


class ProductImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lightbox: false,
            imagePos:0,
            lightboxImages:[]
          }
    }


    componentDidMount(){
        if(this.props.detail.images.length > 0){
            let lightboxImages = [];

            this.props.detail.images.forEach(item => {
                lightboxImages.push(item.url)
            });

            this.setState({
                lightboxImages
            })
        }
    }

    renderCardImage = () => {
        if(this.state.lightboxImages.length > 0){
            return this.state.lightboxImages[0];
        } else {
            return image_not_avail;
        }
    }

    showThumbs = () => (

            this.state.lightboxImages.map((item,i) =>(
                i > 0 ?
                <div key={i}
                className="thumb"
                style={{background: `url(${item}) no-repeat`}}
                onClick={()=> this.handleLightBox(i)}
                >
            </div>: null
            ))
    
    )
        
    
    
    handleLightBox = (pos) => {
if(this.state.lightboxImages.length > 0){
    this.setState({
        lightbox: true,
        imagePos: pos
    })
}
    }

    handleLightBoxClose = () => {
        this.setState({
            lightbox: false
        })
    }


    render() { 
        console.log(this.state);
        const { detail } = this.props;
        return (
            
            <div className="product_image_container">
            <div className="main_pic">
                <div
                style={{background:`url(${this.renderCardImage()}) no-repeat`}}
                onClick={()=> this.handleLightBox(0)}
                
                ></div>
            
            
            </div>

            <div className="main_thumbs">
                { this.showThumbs() }
            </div>
            {
                this.state.lightbox ? 
                <ImageLightBox 
                    id={detail.id}
                    images={this.state.lightboxImages}
                    open={this.state.open}
                    pos={this.state.imagePos}
                    onclose={() => this.handleLightBoxClose()}

                
                
                
                />
                :null
            }
        </div>
        
        );
    }
}
 
export default ProductImg;