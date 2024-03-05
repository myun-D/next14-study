import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo, { getMovie } from "../../../../component/movie-info"
import MovieVideos from "../../../../component/movie-videos"

interface IParams {
  params: {
    id: string
  }
}
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id)
  return {
    title: movie.title,
  }
}

export default async function MovieDetail({ params: { id } }: IParams) {
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
