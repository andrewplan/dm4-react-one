import React from "react";
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: []
            , showNewPostForm: false
        };
    }

    savePost( post ) {
        console.log( post );
        this.setState( {
            posts: [ ...this.state.posts, post ]
            , showNewPostForm: false
        } )
    }

    getPostInfo( post ) {
        alert( post.title );
    }

    toggleNewPostForm() {
        this.setState( { showNewPostForm: !this.state.showNewPostForm } );
    }

    // borrow from class App and add new stuff to it.
    render() {
        // ... breaks object into its key-value pairs
        const posts = this.state.posts.map( ( post, index ) => <Post key={ index }
                                                                    getInfo={ this.getPostInfo }
                                                                    { ...post } /> );
        // const posts = this.state.posts.map( post => <Post content={ post.content } title={ post.title } /> );

        // can only return one parent-level HTML element.
        return (
            <div>
                {
                    this.state.showNewPostForm
                      ?
                          <NewPost savePost={ this.savePost.bind( this ) }/>
                      :
                          <button onClick={ this.toggleNewPostForm.bind( this ) }>New Post</button>

                }
                { posts }
            </div>
        );
    }
}
