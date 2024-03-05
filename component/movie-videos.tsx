import { API_URL } from "../app/(home)/page"

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  throw new Error("something broke...")
  // const responsive = await fetch(`${API_URL}/${id}/videos`)
  // return responsive.json()
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id)
  return <h6>{JSON.stringify(videos)}</h6>
}
