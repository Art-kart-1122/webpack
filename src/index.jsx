import * as $ from 'jquery';
import Post from "./Post";
import React from 'react'
import {render} from 'react-dom'
import './babel'
import './styles/main.css';
import json from './assets/json.json'
import CarpLogo from './assets/carp.jpeg'

const post = new Post('Artur webpack', CarpLogo)
//$('pre').html(post.toString())



const App = () => (
    <div className="container">
        <h1>Artur Webpack</h1>
        <hr/>
            <div className="logo"/>
            <pre/>
    </div>
)

render(<App />, document.getElementById('app'))
