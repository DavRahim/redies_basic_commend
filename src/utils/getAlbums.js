
export const getAlbums = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = res.json()
  return data
}