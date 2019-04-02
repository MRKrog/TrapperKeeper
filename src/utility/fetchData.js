export const fetchData = async (url) => {
  const response = await fetch(url)
  if(!response.ok) { throw new Error(`Bad Initial Fetch Request at ${url}`)}
  const data = await response.json()
  return data
}
