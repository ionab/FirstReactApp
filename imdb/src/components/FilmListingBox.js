import React from 'react';
import Film from './Film.js'

class FilmListingBox extends React.Component{
  render(){
    const filmNodes = this.props.data.map(film => {
        return(<Film name={film.name} key={film.id}>
      </Film>
    )
    });
    return (
      <div>
      <div className="film-list">{filmNodes}</div>

    </div>
    )
  }


}

export default FilmListingBox;
