import React, {Component} from 'react';
import CommentList from '../components/CommentList'

class CommentBox extends Component{
  constructor(probs){
    super(probs);
    this.state = {
      data: [{id: 1, author: "Upul", text: "React Rocks!"}, {id: 2, author: "Upul", text: "React Really Rocks!"}, {id: 3, author: "Upul", text: "React Really Really Rocks!"}, {id: 4, author: "Upul", text: "I promise this is not a Geology Joke!"}]
    }

  }
  render(){
    return (
      <div className="CommentBox">
        <h2>Comment List</h2>
        <CommentList data={this.state.data}/>
      </div>
    )
  }
}

export default CommentBox;
