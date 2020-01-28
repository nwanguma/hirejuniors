// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default (props) => {
//   const [articles, setArticles] = useState([]);
//   const [error, setError] = useState('Nothing to display');

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/articles/').then((response) => {
//       const articles = response.data;
//       setArticles(articles);
//     }).catch((err) => {
//       // if (err && err.response.status === 404) {
//       //   const error = err.response.data;
//       //   setError(error);
//       // }
//     })
//   }, []);

//   return (
//     <section className="section-blog">
//       <p>This is a section for blog posts and resources</p>
//       <a href="#">{articles.length > 0 ? articles[0].title : error}</a>
//       <a href="#">{articles.length > 0 ? articles[1].title : error}</a>
//       <a href="#">{articles.length > 0 ? articles[2].title : error}</a>
//     </section>
//   )
// }

import React from 'react';

export default () => {
  return (
    <p>This is the about component</p>
  )
}