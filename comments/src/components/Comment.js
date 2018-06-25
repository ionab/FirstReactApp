import React, {Component} from 'react';


class Comment extends Component{
  render(){
    return(
    <div className="comment">
      <h4 className = "comment-author">{this.props.author}</h4>
      <p>Said: {this.props.children}</p>
    </div>
    );
  }
}

export default Comment;
