import React from 'react'

export default function ApiFetcher(props) {
    return (
        <div>
            <img src={props.location.state} />
            {props.location.test}
        </div>
    )
}
