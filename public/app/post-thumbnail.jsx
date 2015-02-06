import './post-thumbnail.css!';
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="post-thumbnail">
        <a href={'/category/' + this.props.cid + '/post/' + this.props.pid}>
          <h3> {this.props.title} </h3>
          <p>
            {this.props.thumb}
            <span className="read-next-button"> CONTINUE </span>
          </p>
        </a>
      </div>
    );
  }
})
