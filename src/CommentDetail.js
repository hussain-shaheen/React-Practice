import React from 'react';
import faker from "faker";

const CommentDetail = props => {
    return(
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.image()} />
          </a>
          <article>
            <div className="content">
              <a href="/" className="author">
              {props.author}
              </a>
              <div className="metadata">
                <span className="date">{props.timePost}</span>
              </div>
              <br/>
              <hr/>
              <div className="text">
                <h1>{props.heading}</h1>
              </div>
              <div className="text">{props.content}</div>
            </div>
          </article>
        </div>
    );
};

export default CommentDetail;