import React from 'react';

const Article = ({title, url, _id, data, handleClick, buttonText, saved}) => (
    <div>
        <em>{title}</em>
        <button onClick={() => handleClick(_id)}>
        {buttonText}
        </button>
    </div>
);

export default Article;