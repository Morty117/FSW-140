import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home(){
    const [avengers, setAvengers] = useState([])

  const getAllAvengers = () => {
    axios.get("http://localhost:9000/api/allAvengers")
    .then(res => {
        setAvengers(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

  useEffect(() => {
    getAllAvengers()
  }, [])

  return (
    <div>
        <h1 className='assemble'>AVENGERS...ASSEMBLE!</h1>

        <img className="gif" src="https://media3.giphy.com/media/LOFT5Jd31ON1b5kLtP/200w.webp?cid=ecf05e4797tecbs0ziv36cyi7qpmqabfth9e52ktonnft8id&rid=200w.webp&ct=g" alt="Avengers"/>

      {avengers.map(avenger => {
        return(
          <div className="avenger-div">
            <h1>Avenger Name: {avenger.name}</h1>
            <p>Appeared <strong>{avenger.appearances}</strong> times</p>
            <p>Gender: {avenger.gender}</p>
            <p>Year joined: {avenger.year}</p>
            <p>Notes: {avenger.notes}</p>
          </div>
        )
      })}
    </div>
  );
}