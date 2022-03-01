import React, {useEffect,useState} from 'react'
import Githubusers from './githubusers';
import Githubusersdetails from './githubusersdetails';
import Loading from './loading';
// import "./style.css";

const Githubdetails = () => {

    const [userDetails, setUserDetails] = useState([])
    // const [loading, setLoading] = useState(true);   

    const getUserDetails = async () => {
        try{
            debugger;
            const response = await fetch('https://api.github.com/users');
            // setLoading(false);
            setUserDetails(await response.json([0]));

        }catch (error){
            // setLoading(false);
            console.log(error);
        }

        // console.log(users.login);
        }
        
        useEffect(() => {
            getUserDetails();

    },
     []);
    // console.log(); 
    debugger;

    // if(loading){

    //     setTimeout(() => setLoading(false), 5000);
    //       return <Loading />
    // }
   
    return (
            
            <>
            {/* <Githubusers users={users} / > */}
            <Githubusersdetails  userDetails={userDetails} / >
            </>
    )
}

export default Githubdetails
