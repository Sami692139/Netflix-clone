import React from 'react'
import Row from '../Row'
import requests from '../../../../utils/requests';


const RowList = () => {
  return (
    <>
     <Row title ="NETFLIX ORIGINALS"
     fetchUrl={requests.fetchActionMovies}/>
     
    </>
  )
}

export default RowList