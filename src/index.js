import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail 
                author="Jeremy" 
                timePost="Today at 2:40PM" 
                content="Nice Car mate! Love that color."
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="James" 
                timePost="Today at 9:40PM" 
                content="That V8 is a beauty."
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Richard" 
                timePost="Today at 11:59PM" 
                content="The look itself is enough."
            />
        </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));