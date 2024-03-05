import Movie from "../../component/movie"
import styles from "../../styles/home.module.css"
import { API_URL } from "../constans"

export const metadata = {
  title: "Home",
}

async function getMovie() {
  await new Promise((resolve) => setTimeout(resolve, 1))
  const response = await fetch(API_URL)
  const json = await response.json()

  return json
}

export default async function HomePage() {
  const movies = await getMovie()
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  )
}
