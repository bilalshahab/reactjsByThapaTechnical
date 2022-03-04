import React, {useEffect,useState} from 'react'
import Githubusersdetails from './githubusersdetails';
import './style.css';

const Githubdetails = () => {

    const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true);   
    debugger;
    const getUsers = async () => {
        try{
            // debugger;
            const response = await fetch('https://api.github.com/users');
            // const response = await fetch('https://api.github.com/users/mojombo');
            // setLoading(false);
            setUsers(await response.json([0]));
        }catch (error){
            // setLoading(false);
            // console.log(error);
        }

    }
    useEffect(() => {
            getUsers();

    }, []);

    debugger;

    // if(loading){
    //     setTimeout(() => setLoading(false), 1000);
    //       return <Loading />
    // }

   console.log(users);

    return (
            <>
            <Githubusersdetails users={users} / >
            </>
    )
    
}

export default Githubdetails
