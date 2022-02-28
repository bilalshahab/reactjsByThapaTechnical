// import React from 'react'
import React, {useEffect,useState} from 'react'
// import Skeleton from '@mui/material/Skeleton';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { display } from '@mui/system';
import LoadingOverlay from 'react-loading-overlay';


const Loading = () => {


    return (

        <div className="loadingDiv">
            {/* <h1>Loading</h1> */}
            
            {/* <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} /> */}

            {/* <Box className='loading-circle' sx={{ display: 'flex' , alignItems: 'center', justifyContent: 'centr'}}> */}
            {/* <Box className='loading-circle'>
            <CircularProgress />
            </Box> */}
            
            <LoadingOverlay
            active={true}
            spinner
            text='Loading your content...'
            >
            {/* <p>Some content or children or something.</p> */}
            </LoadingOverlay>

            
        </div>
    )
    
}

export default Loading
