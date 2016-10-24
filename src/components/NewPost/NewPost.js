import React from 'react';

export default class NewPost extends React.Component {
    constructor( props ) {
        // calls the constructor of the parent component
        super( props );

        this.state = {
            postContent: ''
            , postTitle: ''
        };
    }

    // static = means you can use it before object is created
    // get = kinda like const.  accessible but not mutable.
    static get propTypes() {
        return {
            // kinda like a Mongoose schema
            // postContent: React.PropTypes.string.isRequired
            savePost: React.PropTypes.func.isRequired
        };
    }

    handleChange( field, event ) {
        this.setState( {
            [ field ]: event.target.value
        } );
    }

    savePost() {
        this.props.savePost( {
            title: this.state.postTitle
            , content: this.state.postContent
        } );
    }

    render() {
        return (
            <section>
                <input
                    onChange={ this.handleChange.bind( this, 'postTitle' ) }
                    type='text'
                    value={ this.state.postTitle }
                />
                <textarea
                    onChange={ this.handleChange.bind( this, 'postContent' ) }
                    value={ this.state.postContent }
                >
                </textarea>
                <button onClick={ this.savePost.bind( this ) }>Save Post</button>
            </section>
        );
    }
}
