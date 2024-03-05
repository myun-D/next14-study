import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo from "../../../../component/movie-info"
import MovieVideos from "../../../../component/movie-videos"

// async function getMovie(id: string) {
//   console.log(`Fetching movies: ${Date.now()}`)
//   await new Promise((resolve) => setTimeout(resolve, 5000))
//   const responsive = await fetch(`${API_URL}/${id}`)
//   return responsive.json()
// }

// async function getVideos(id: string) {
//   console.log(`Fetching videos: ${Date.now()}`)
//   await new Promise((resolve) => setTimeout(resolve, 5000))
//   const responsive = await fetch(`${API_URL}/${id}/videos`)
//   return responsive.json()
// }

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string }
}) {
  //병렬 구조
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}
