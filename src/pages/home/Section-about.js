import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default (props) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('Nothing to display');

  useEffect(() => {
    axios.get('http://localhost:3000/api/jobs/').then((response) => {
      const jobs = response.data;
      setJobs(jobs);
    }).catch((err) => {
      // if (err && err.response.status === 404) {
      //   const error = err.response.data;
      //   setError(error);
      // }
    })
  }, []);

  return (
    <section className="section-blog">
      <p>This is a section for job post snippets</p>
      <a href="#">{jobs.length > 0 ? jobs[0].title : error}</a>
      <a href="#">{jobs.length > 0 ? jobs[1].title : error}</a>
      <a href="#">{jobs.length > 0 ? jobs[2].title : error}</a>
    </section>
  )
}