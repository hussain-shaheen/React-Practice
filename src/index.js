import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail 
                author={faker.company.companyName()}
                timePost="Today at 2:40PM" 
                heading={faker.lorem.sentences()}
                content={faker.lorem.paragraphs()}
            />
        </ApprovalCard>
        <br/>
        <br/>
        <ApprovalCard>
            <CommentDetail 
                author={faker.company.companyName()}
                timePost="Today at 9:40PM"
                heading={faker.lorem.sentences()}
                content={faker.lorem.paragraphs()}
            />
        </ApprovalCard>
        <br/>
        <br/>
        <ApprovalCard>
            <CommentDetail 
                author={faker.company.companyName()}
                timePost="Today at 11:59PM"
                heading={faker.lorem.sentences()}
                content={faker.lorem.paragraphs()}
            />
        </ApprovalCard>
        <br/>
        <br/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));