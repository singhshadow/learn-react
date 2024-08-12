import React, { useEffect, useState } from 'react'

function Linkdn() {
    const [data, setData] =useState([])
    useEffect(() => {
        fetch('https://api.linkdn.com/users/akshatjain')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
  return (
    <div className='bg-gray-700 text-center p-5 text-4xl text-red-700 font-semibold'>LinkDn Followers: </div>
  )
}

export default Linkdn
