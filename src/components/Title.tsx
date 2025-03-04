import { ReactNode } from "react"

const Title = ({text}: {text:string}):ReactNode => {
  return (
    <div><h2 className="my-4 text-4xl capitalize lg:text-5xl lg:my-6">{text}</h2></div>
  )
}

export default Title