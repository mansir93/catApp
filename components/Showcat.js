import React from 'react'
import Resources from './Resources';

const Showcat = () => {

    const webURL = 'https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC';
    
    const render = ( data ) => {

      if ( data.loading === true ) return <p>loading ...</p>

      console.log('Got the data', data );

   return (    data.trans.map( cat => (

          <div key={cat.id} >

              <img className='image' src= { cat.url } alt='cat img' />

          </div>
        )
   )

   ) 
  }

  return (

    <div>

        <Resources path={ webURL } render={ render }  />

    </div>
  )
}

export default Showcat;