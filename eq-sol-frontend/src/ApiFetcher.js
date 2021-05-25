
//here comes the main phase, where the cropped image from ImageCrop, via Upload or Camera component is passed to backend\
//We use REST API technology where we using post method call an API using a link from backend and with it send Image.
//the reply would contain answers we needed, it is converted to string form and pass all the answers to Answer Component
//which displays answer, visit Answer.js
import React from 'react'
import Answer from './Answer';

export default function ApiFetcher(props) {
    return (
        <div>
            <img src={props.location.state.image} />
            <Answer/>
        </div>
    )
}
