
//here comes the main phase, where the cropped image from ImageCrop, via Upload or Camera component is passed to backend\
//We use REST API technology where we using post method call an API using a link from backend and with it send Image.
//the reply would contain answers we needed, it is converted to string form and pass all the answers to Answer Component
//which displays answer, visit Answer.js
import React, {useEffect, useState } from 'react'
import Answer from './Answer';

export default function ApiFetcher(props) {

    const [error,Seterror] = useState(0);
    const [isLoaded,SetisLoaded] = useState(false);
    const [test, SetTest] = useState(0);
    
    const [EqnImg,SetEqnImg] = useState(0);
    const [Ans,SetAns] = useState(0);
    var a = {
      Eqn:"5x + 3 = 23",
      TypeEqn:"Linear Equation",
      EqnAns:"x = 4"
      };

    

    useEffect(() => {
      SetEqnImg(props.location.state.image)
      fetch('http://127.0.0.1:5000/api',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          image:EqnImg
        })
      })
        .then(Response => Response.json())
        .then(
          (data) => {
            SetisLoaded(true);
            SetAns(data);
            
        
            
          },
          (error) => {
              Seterror(error);
          }
        )
        
  });
    if (error) {
        return <div className=" container text-center home-para" style={{marginTop:"50px",fontSize:"40px"}}>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return(
            <div className="container" >
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        ) 
      } else {
        return (
            <div>
                <Answer Ans={Ans}/>
                <img src={Ans.image} />
                </div>
        );
      }
    

    
}
