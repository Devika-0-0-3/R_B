import React from 'react'
import {useLoaderData} from 'react-router-dom'


const JobDetails = () => {
    const jobDetails=useLoaderData();
    console.log("Job Details:", jobDetails);
  return (
    <div className='job-details'>
        <p><b>Job Title:</b>{jobDetails.title}</p>
        <p><b>Salary:</b>{jobDetails.salary}</p>
        <p><b>Location:</b>{jobDetails.location}</p>
        <p><b>Description:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi laudantium at ut accusamus totam adipisci non dolorum. Ab atque deserunt aliquam velit autem corporis consectetur quisquam, iste earum obcaecati</p>
        <button>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader=async ({params})=>{
    const {id}= params;
    const res=await fetch("http://localhost:5000/Jobs/"+ id)
    return res.json();
}


/*

data.json -->open integrated terminal and type for server
 npx json-server --watch data.json --port 5000

 */
