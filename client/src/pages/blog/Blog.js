// import React, { useEffect, useState } from 'react';

// const Blog = () => {
//   const [articles, setArticles] = useState();

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/articles')
//       .then(res => {
//         const articles = res.data;
//         setArticles(articles);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   });

//   return (
//     {
//       articles ? 'No articles to display' : articles.map((article, index) => {
//         return <Article key={index} article={article} />
//       })
//     }
//   )
// }

// export const Article = ({ article }) => {
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