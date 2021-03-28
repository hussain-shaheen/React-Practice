import React from 'react';

const ApprovalCard = (props) => {

    return (
        <div className="ui container fluid">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="align-right">
                    <button class="ui active button ui right floated button mini ui button">
                        <i class="share icon"></i>
                        Share
                    </button>
                    <button class="ui active button ui right floated button mini ui button">
                        <i class="heart icon"></i>
                        Like
                    </button>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default ApprovalCard;