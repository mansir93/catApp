import React,{ useState, useEffect } from 'react';
import axios from 'axios';


const Resources = ( { path, render  } ) => {

    const initialState = {
        trans: [],
        loading: true,
        error: null

    }

    let [ state, setState ] = useState( initialState );

    const getData = async ( ) => {
        try {
            const result = await axios.get( path );
            console.log( "results", result );

            const newData = {
                trans: result.data,
                loading: false,
                error: null
            }
            setState =  ( newData ) ;

        } catch (error) {
            console.log( "error in getData", error )
        }
        
    }

    useEffect( () => {

        getData();

    }, [] )


  return (
    <div className='Showlist'>

        {  render( state )  }
      
    </div>
  )
  }

export default Resources;