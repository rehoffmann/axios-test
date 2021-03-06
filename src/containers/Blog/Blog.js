import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';


import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {



 


    render () {

       

        return (
            <div className = "Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/' exact activeClassName="my-active">Home</NavLink></li>
                            <li><NavLink to='/new-post'>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
     {/*    <Route path="/" exact render={() => <Posts/>}/>
        <Route path="/"  render={() => <h2>None Exact Route</h2>}/> */}
        <Route path ='/' exact component={Posts}/>
        <Route path ='/new-post' exact component={NewPost}/>
            </div>
        );
    }
}

export default Blog;