import React from 'react'
debugger;

const Githubusersdetails = ({usersdetails}) => {
    return (
        <div>
             <div className="container-fluid mt-5">
                <div className="row text-center">
                <h1>Github Users Details</h1>
               
                   
                        <div className="col-10 col-md-6 mt-5 mx-auto" key={usersdetails.id}>
                                
                            <div className="card p-2">
                                <div className="d-flex align-items-center">
                                    <div className="image"><img src={usersdetails.avatar_url} alt="" className="rounded" width="155" /></div>
                                        <div className="ml-2 w-100">

                                            <h4 className="mb-0 mt-0 textLeft">{usersdetails.login} </h4>
                                            <a href={usersdetails.html_url}><span className="textLeft link">{usersdetails.html_url}</span></a>
                                            <div className="pt-2 mt-2 bg-primart d-flex justify-content-betwween rounded text-white stats">
                                                <div className="d-flex flex-column flex-fill"><span className="articles">Public Repos </span> <span className="number1">{usersdetails.public_repos}</span></div>
                                                <div className="d-flex flex-column flex-fill"><span className="followers">Followers </span> <span className="number2">{usersdetails.followers}</span></div>
                                                <div className="d-flex flex-column flex-fill"><span className="rating">Location </span> <span className="number3">{usersdetails.location}</span></div>
                                            </div>

                                        </div>

                                </div>
                            </div>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    )
}

export default Githubusersdetails
