import React, {Component} from 'react';
import FavouriteButton from './FavouriteButton';
import SpecShowTimeButton from './SpecShowTimeButton'


class Film extends Component{
  render(){
    return(
    <div className="film">
      <FavouriteButton/>
      <h4 className = "film-name">{this.props.name}</h4>
      <SpecShowTimeButton/>
    </div>
    );
  }
}

export default Film;
