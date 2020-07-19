import React,{Component} from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Sections/Hero.css';
import HeroProduct from './Sections/HeroProduct';
import {connect} from 'react-redux';
import {fetchProducts} from '../../../_actions/user_actions';

class Hero extends Component {

  UNSAFE_componentWillMount(){
      this.props.fetchProducts();
      
  }
  render() {

      
    let productItems ;

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={4}
      isPlaying={false}
      interval={5000}
      infinite={true}
      orientation='vertical'
    >
      <Slider>

        {productItems = this.props.products
          .filter (product => product.kit === true )
          .map( product =>
            <Slide key={product.id}>
            <HeroProduct key={product.id}  item={product} />
            </Slide>
          )
        }
          
           
          
      </Slider>
      <DotGroup
        className="Dots"
      />
    </CarouselProvider>
  );
}
}
const mapStateToProps = state =>({
  products:state.products.filteredItems,
}) 
export default connect(mapStateToProps, {fetchProducts})(Hero)
