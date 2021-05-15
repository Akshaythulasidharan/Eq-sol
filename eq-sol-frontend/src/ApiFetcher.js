import React from 'react'

function arrayBufferToBase64(buffer) {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

export default function ApiFetcher(props) {
    return (
        <div>
            <img src={arrayBufferToBase64(props.location.state)} />
            {props.location.test}
        </div>
    )
}
