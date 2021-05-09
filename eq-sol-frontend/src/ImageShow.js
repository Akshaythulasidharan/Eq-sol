
// import React from 'react'

// export default function ImageShow(props) {
//     return (
//         <div>
//             <img src={props.location.state.image} />
//                 {props.location.state.test}
//         </div>
//     )
// }

import React, { Component } from 'react'

export default class ImageShow extends Component {
    render() {
        return (
            <div>
               { console.log(this.props.match.params.id)}
               <img src={this.props.match.params.id}/>
            </div>
        )
    }
}



