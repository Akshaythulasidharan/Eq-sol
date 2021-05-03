import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import About from './About';
import Camera from './Camera';
import HomeBody from './HomeBody';
import Upload from './Upload';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/about" component={About} />
                <Route exact path="/" component={HomeBody} />
                <Route path="/camera" component={Camera} />
                <Route path="/upload" component={Upload} />
            </Switch>
        </div>
    )
}
