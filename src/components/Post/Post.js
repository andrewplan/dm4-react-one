import React from 'react';

//stateless component -- only needs to display data and nothing else.  Essentially a template.
export default function Post( props ) {
    return (
        <div>
            <h3 onClick={ () => props.getInfo( props ) }>{ props.title }</h3>
            <p>{ props.content }</p>
        </div>
    );
}

Post.propTypes = {
    title: React.PropTypes.string.isRequired
    , content: React.PropTypes.string.isRequired
    , getInfo: React.PropTypes.func.isRequired
}
