import React from "react"
import { Header } from "../components"

export default ({ children }) => {
  return (
    <div className="bg-primary-base w-full">
      <div className="mx-auto container overflow-auto">
        <Header />
        <div className="">{children}</div>
      </div>
    </div>
  )
}
