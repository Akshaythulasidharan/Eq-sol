
//here it provides space to drag and drop image file, also click and upload the file
//Here we use react-dropzone module for this.
//after drag and drop of image, navigated to ImageCrop component, visit ImageCrop.js
//This is done using if, when no image, shows drop image, if image uploaded, shows ImageCrop where we send
//image to that component.
import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {ModalBody} from 'reactstrap';
import ImageCrop from './ImageCrop';

export default function Upload() {

  const [uploadImg,SetImg] = useState(0);

  const onDrop = useCallback((acceptedFiles) => {

    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        var blob = new Blob( [ reader.result ], { type: "image/jpeg" } );
        var urlCreator = window.URL || window.webkitURL;
        SetImg(urlCreator.createObjectURL( blob ))
      }
      reader.readAsArrayBuffer(file)
    })

  }, []);

  const { getRootProps , getInputProps} = useDropzone({onDrop})
  var first =
    <div {...getRootProps()} className="upload-container" style={{display: "table"}}>
      <input {...getInputProps()}  />
      <div style={{fontSize:"20px",verticalAlign:"middle",display: "table-cell"}} >
        <p className="text-center" style={{color:"#626566"}}>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  ;  
  var second  = <ImageCrop image={uploadImg} />
  var render;

  if(uploadImg){
    render = second;
  } else {
    render = first;
  }

  return (
    <div >
      <ModalBody>
        <div style={{height:"50px"}} ></div>
          {render}
        <div style={{height:"50px"}} ></div>
      </ModalBody>
    </div>
  )
}
