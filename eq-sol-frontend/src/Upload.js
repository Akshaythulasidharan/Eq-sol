import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function arrayBufferToBase64(buffer) {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export default function Upload() {
    const [uploadImg,SetImg] = useState(0);
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
          // Do whatever you want with the file contents
            SetImg(reader.result)
            

          }
          reader.readAsArrayBuffer(file)
        })
        
      }, [])
      const { getRootProps , getInputProps} = useDropzone({onDrop})
    
      const img = <img src ={`data:image/gif;base64,${arrayBufferToBase64(uploadImg)}`} />;
    return (
        

      <div >
        
      <ModalBody>
        <div style={{height:"50px"}} ></div>
      <div {...getRootProps()} className="upload-container" style={{display: "table"}}>
      <input {...getInputProps()}  />
      
      <div style={{fontSize:"20px",verticalAlign:"middle",display: "table-cell"}} >
      <p className="text-center" style={{color:"#626566"}}>Drag 'n' drop some files here, or click to select files</p>
      
      </div>
      </div>
      <div style={{height:"50px"}} ></div>
      </ModalBody>
      
      </div>
    )
}
