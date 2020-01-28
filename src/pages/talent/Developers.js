// import React, { useEffect, useState } from 'react';

// const Developers = () => {
//   const [jobs, setDevelopers ] = useState();

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/jobs')
//     .then(res => {
//       const developers = res.data;
//       setDevelopers(jobs)
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   });

//   return (
//     {jobs? 'No developers to display': jobs.map((article, index) => {
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