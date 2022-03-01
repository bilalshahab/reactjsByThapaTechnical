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
                            const { id, login, avatar_url, html_url, followers, public_repos, following } = curElem;
                            {/* console.log(users);*/}
                            users.length = 10;
                            {/* console.log(id); */}
                            return(
                                 /* <Link to='https://api.github.com/orgs/ORG/projects'>  */
                                /* < href="https://api.github.com/orgs/ORG/repos"> */
                                
                                <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                                 
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image"><img src={curElem.avatar_url} className="rounded" width="155" /></div>
                                                <div className="ml-2 w-100">
                                                
                                                    <h4 className="mb-0 mt-2 textLeft">{curElem.login} </h4>
                                                    <h6 className="textLeft link"><a href={curElem.html_url}>{curElem.url}</a></h6>
                                                    <h6 className='textleft link'><a href="https://api.github.com/users/{id}">{curElem.url}</a></h6>

                                                    <div className='user-details'>
                                                    <div className="pt-2 mt-2 bg-primart d-flex justify-content-betwween rounded text-white stats">
                                                        <div className="d-flex flex-column flex-fill"><span className="articles">Following </span><p> {curElem.following}</p></div>
                                                        <div className="d-flex flex-column flex-fill"><span className="followers">Followers </span> {curElem.followers}</div>
                                                        <div className="d-flex flex-column flex-fill"><span className="rating">Public Repos </span> {curElem.public_repos}</div>
                                                    </div>
                                                </div>

                                                </div>
                                                
                                                

                                        </div>
                                    </div>
  
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
