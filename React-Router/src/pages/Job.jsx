import React from 'react'
import { Link,useLoaderData} from 'react-router-dom'

const Job = () => {
    const jobData=useLoaderData();
  return (
    <div>
      {jobData.map((jo)=>{
        return <Link>
            <h4>{jo.title}</h4>
            <p>{jo.location}</p>
        </Link>
      })}
    </div>
  )
}

export default Job

export const jobLoader = async()=>{
    const res= await fetch('http://localhost:5000/Jobs')
    return res.json();
}
