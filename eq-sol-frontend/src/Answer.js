import React from 'react'
import { Link } from 'react-router-dom'
export default function Answer() {
        return (
        <div>
            <div className="container" >
                <div className="row" style={{height:"30px"}} ></div>
                <div className="row justify-content-center ans-container" >
                    <div className="col-12" style={{height:"30px"}}></div>
                    <div className="col-9 align-self-center">
                        <div className="row" style={{marginTop:"20px", marginBottom:"20px"}}>
                            <div className="col-5">
                                <div className="ans-para">Equation:</div>
                            </div>
                            <div className="col-7" style={{backgroundColor:"#121212", borderRadius:"13px"}}>
                                <div className="ans-para">5x + 3 = 23</div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"20px", marginBottom:"20px"}}>
                            <div className="col-5">
                                <div className="ans-para">Type of Equation:</div>
                            </div>
                            <div className="col-7" style={{backgroundColor:"#121212", borderRadius:"13px"}}>
                                <div className="ans-para">Linear Equation</div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"20px", marginBottom:"20px"}}>
                            <div className="col-5">
                                <div className="ans-para">Answer:</div>
                            </div>
                            <div className="col-7" style={{backgroundColor:"#121212", borderRadius:"13px"}}>
                                <div className="ans-para">x = 4</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12" style={{height:"30px"}}></div>
                    
                </div>
                <div  style={{height:"30px"}}></div>
                <div className="text-center" >
                                <Link to="/" className="btn btn-home" >
                                Go to Home
                                </Link>
                </div>
            </div>
        </div>
    )
}
