import React, {Component} from 'react';
import FilmListingBox from '../components/FilmListingBox';
import AllShowTimes from '../components/AllShowTimes'


class OpeningBox extends Component{
  constructor(probs){
    super(probs);
    this.state = {
      data: [{id: 1, name: "Sausage Party"}, {id: 2, name: "Cafe Society"}, {id: 3, name: "Morgan"}, {id: 4, name: "The 9th life of Louis Drax"}, {id: 5, name: "Naam Hai Akira"}, {id: 6, name: "Equity"}, {id: 7, name: "Things to Come"}]
    }
  }
  render(){
    return (
      <div className="OpeningBox">
        <h2>UK Opening This Week</h2>
        <FilmListingBox data={this.state.data}/>
        <a href id="seemore">See more opening this week >></a>
        <div id="get-showtimes">
        <AllShowTimes/>
      </div>
      </div>
    )
  }
}


export default OpeningBox;
