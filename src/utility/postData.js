export const postData = async (url, options) => {
  const response = await fetch(url, options)
  if(!response.ok) { throw new Error(`Bad Initial Fetch Request at ${url}`)}
  const data = await response.json()
  console.log(data)
}