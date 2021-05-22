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
