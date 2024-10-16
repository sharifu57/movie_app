import React, { useEffect } from 'react'
import { fetchData } from '../../services/api'

export default function HomePage() {
    const response = fetchData('https://api.themoviedb.org/3/authentication')

    useEffect(()=> {
        console.log("=====authentication")
        console.log(response)
        console.log("=====end authentication====")
        
        // fetchData('https://api.themoviedb.org/3/movie/550?api_key=YOUR_API_KEY')
        //.then(data => console.log(data))
        //.catch(error => console.error(error))
    })
  return (
    <div>HomePage</div>
  )
}
