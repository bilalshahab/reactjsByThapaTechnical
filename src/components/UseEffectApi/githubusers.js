import React from 'react'
import { Link } from 'react-router-dom';
import Githubusersdetails from './githubusersdetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Githubusers = ({users}) => {
    return (
        
        <div>
             <div className="container-fluid mt-5">
                <div className="row text-center">
                <h1>Github Users API</h1>
                    {
                        users.map((curElem) => {
                            const { id, login, avatar_url, html_url } = curElem;
                            {/* console.log(users);*/}
                            users.length = 10;
                            {/* console.log(id); */}
                            return(
                                 /* <Link to='https://api.github.com/orgs/ORG/projects'>  */
                                /* < href="https://api.github.com/orgs/ORG/repos"> */
                                
                                <div className="col-10 col-md-4 mt-5" key={id}>
                                 
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image"><img src={avatar_url} className="rounded" width="155" /></div>
                                                <div className="ml-2 w-100">
                                                
                                                    <h4 className="mb-0 mt-2 textLeft">{login} </h4>
                                                    {/* <h6 className="textLeft link"><a href={html_url}>{curElem.url}</a></h6> */}
                                                    <h6 className='textleft link'><a href="/githubusersdetails">{curElem.url}</a></h6>

                                                </div>

                                        </div>
                                    </div>


                                    {/* <div className='user-details'>
                                        <div className="pt-2 mt-2 bg-primart d-flex justify-content-betwween rounded text-white stats">
                                            <div className="d-flex flex-column flex-fill"><span className="articles">Articles </span> <span className="number1">38</span></div>
                                            <div className="d-flex flex-column flex-fill"><span className="followers">Followers </span> <span className="number2">100</span></div>
                                            <div className="d-flex flex-column flex-fill"><span className="rating">Public Repos </span> <span className="number3">{public_repos}</span></div>
                                        </div>
                                    </div> */}
                                
                                </div>
                                /* </a> */
                                 /* </Link>  */
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
        
    )
}

export default Githubusers
