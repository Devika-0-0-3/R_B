import React from 'react'
import { Link,useLoaderData} from 'react-router-dom'
import JobLayout from '../layout/JobLayout';

const Job = () => {
    const jobData=useLoaderData();
   
  return (
    <div className='job'>
      {jobData.map((jo)=>{
        return <Link to={jo.id.toString()} key={jo.id}>
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
    if(!res.ok){
      throw Error("Could not found the job deatails")
    }
    return res.json();
}
