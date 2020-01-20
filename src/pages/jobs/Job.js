// import React, { useEffect, useState } from 'react';

// const Job = () => {
//   const [job, setJob ] = useState();

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/jobs/:id')
//     .then(res => {
//       const job = res.data;
//       setArticles(job)
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   });

//   return (
//     {!job ? 'No job to display': <Job job={job} />}
//   )
// }

// export const Job = ({job}) => {
//   return (
//     <job>
//       <h2>{job.title}</h2>
//       <p>{job.body}</p>
//     </job>
//   )
// }

// export default Job;