import React from 'react'

const Githubusers = ({users}) => {
    return (
        <div>
             <div className="container-fluid mt-5">
                <div className="row text-center">
                <h1>Github Users List</h1>
                    {
                        users.map((curElem) => {
                            const { id, login, avatar_url } = curElem;
                            {/* console.log(users);*/}
                            users.length = 3;
                            console.log(login);
                            return(
                                <div className="col-10 col-md-4 mt-5" key={id}>
                                
                            <div className="card p-2">
                                <div className="d-flex align-items-center">
                                    <div className="image"><img src={avatar_url} className="rounded" width="155" /></div>
                                        <div className="ml-2 w-100">

                                            <h4 className="mb-0 mt-0 textLeft">{login} </h4><span className="textLeft link">{curElem.url}</span>
                                            {/* <div className="pt-2 mt-2 bg-primart d-flex justify-content-betwween rounded text-white stats">
                                                <div className="d-flex flex-column flex-fill"><span className="articles">Articles </span> <span className="number1">38</span></div>
                                                <div className="d-flex flex-column flex-fill"><span className="followers">Followers </span> <span className="number2">100</span></div>
                                                <div className="d-flex flex-column flex-fill"><span className="rating">Rating </span> <span className="number3">8</span></div>
                                            </div> */}

                                        </div>

                                </div>
                            </div>
                    </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Githubusers
