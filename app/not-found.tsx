import { Metadata } from "next"
import Navigation from "../component/navigation"

export const metadata: Metadata = {
  title: "Not Found",
}
export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  )
}
