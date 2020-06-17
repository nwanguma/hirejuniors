// import React, { useEffect, useState } from 'react';

// const Jobs = () => {
//   const [jobs, setJobs ] = useState();

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/jobs')
//     .then(res => {
//       const jobs = res.data;
//       setJobs(jobs)
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   });

//   return (
//     {jobs? 'No jobs to display': jobs.map((article, index) => {
//       return <Article key={index} article={article} />
//     })}
//   )
// }

// export const Job = ({article}) => {
//   return (
//     <article>
//       <h2>{article.title}</h2>
//       <p>{article.body}</p>
//     </article>
//   )
// }

// export default Blog;

import React from 'react';

export default () => {
  return (
    <p>This is the about component</p>
  )
}