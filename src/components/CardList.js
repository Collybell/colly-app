import React from 'react';

const CardList = (props) => {
    return (
        <div className="card-list">
            <span>{props.card.name}</span>
        </div>
    );
}

export default CardList;