import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

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
      const {getRootProps, getInputProps} = useDropzone({onDrop})
    
    return (
        <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
      <img src ={uploadImg} />
    </div>
    )
}
