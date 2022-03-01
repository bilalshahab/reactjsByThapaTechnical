import React, {useEffect,useState} from 'react'
import Githubusers from './githubusers';
import Loading from './loading';
import './style.css';

const Githubnew = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);   

    const getUsers = async () => {
        try{
            // debugger;
            const response = await fetch('https://api.github.com/users/{id}');
            // setLoading(false);
            setUsers(await response.json([0]));
        }catch (error){
            // setLoading(false);
            console.log(error);
        }

        // console.log(users.login);
    }
    useEffect(() => {
            getUsers();

    }, []);
    // console.log(); 
    debugger;

    if(loading){

        setTimeout(() => setLoading(false), 1000);
          return <Loading />
    }
   
    return (
            
            <>
            <Githubusers users={users} / >
            {/* <Githubusersdetails /> */}
            </>
    )
}

export default Githubnew
