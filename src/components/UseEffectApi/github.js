import React, {useEffect,useState} from 'react'
import Githubusers from './githubusers';
import Githubusersdetails from './githubusersdetails';
import Loading from './loading';
import './style.css';

const Github = () => {

    const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true);   

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

    //////////////////

    const [usersdetails, setUsersdetails] = useState([])

    const getUsersdetails = async () => {
        try{
            const response = await fetch('https://api.github.com/users/mojombo');
            // const response = await fetch('https://api.github.com/{login}');
            // setLoading(false);
            setUsersdetails(await response.json([0]));

            
        }catch (error){
            // setLoading(false);
            // console.log(error);
        }

    }
    useEffect(() => {
        getUsersdetails();
        // console.log(response.json([0]));
    }, []);


    // if(loading){

    //     setTimeout(() => setLoading(false), 1000);
    //       return <Loading />
    // }
   


    return (
            
            <>
            <Githubusers users={users} / >
            <Githubusersdetails usersdetails={usersdetails} / >
            </>
    )
    
}

export default Github
