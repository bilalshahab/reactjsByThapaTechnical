import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Githubusersdetails = ({userDetails}) => {
    return (
        <div>
        {
            userDetails.map((curElem) => {
                const { public_repos,followers, following } = curElem;
                {/* console.log(users);*/}
                {/* users.length = 10; */}
                {/* console.log(id); */}
                return(

                    <div>
                            <h3>Github User Details</h3>

                            <div className="col-10 col-md-6 mt-5" >
                                                    
                                                        <div className="card p-2">
                                                            <div className="d-flex align-items-center">
                                                                <div className="image"><img src='{avatar_url}' className="rounded" width="155" /></div>
                                                                    <div className="ml-2 w-100">
                                                                    
                                                                        <h4 className="mb-0 mt-2 textLeft"></h4>
                                                                        {/* <h6 className="textLeft link"><a href={html_url}>{curElem.url}</a></h6> */}
                                                                        <h6 className='textleft link'><a href="/githubusersdetails"></a></h6>
                                                                        <div className='user-details'>
                                                                            <div className="pt-2 mt-2 bg-primart d-flex justify-content-betwween rounded text-white stats">
                                                                                <div className="d-flex flex-column flex-fill"><span className="articles">Articles </span> <span className="number1">38</span></div>
                                                                                <div className="d-flex flex-column flex-fill"><span className="followers">Followers </span> <span className="number2">100</span></div>
                                                                                <div className="d-flex flex-column flex-fill"><span className="rating">Public Repos </span> <span className="number3">100</span></div>
                                                                            </div>
                                                                        </div>


                                                                    </div>

                                                            </div>
                                                        </div>


                                                    
                                                    
                                                    </div>
                        </div>

                                        
                                        )
                                            })}

         </div>
                        )
                    }
                    

export default Githubusersdetails
