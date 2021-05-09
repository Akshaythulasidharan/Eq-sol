import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import About from './About';
import Answer from './Answer';
import Camera from './Camera';
import HomeBody from './HomeBody';
import ImageShow from './ImageShow';
import Upload from './Upload';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/about" component={About} />
                <Route exact path="/" component={HomeBody} />
                <Route path="/camera" component={Camera} />
                <Route path="/upload" component={Upload} />
                <Route path="/answer" component={Answer} />
                <Route path="/imageshow/:id" component={ImageShow} />
            </Switch>
        </div>
    )
}
