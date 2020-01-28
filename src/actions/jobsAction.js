export const postJob = (payload) => {
  return {
    type: 'POST_JOB',
    job: payload
  }
}