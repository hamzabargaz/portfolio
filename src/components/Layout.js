import React from "react"
import { Link } from "../components"

export default ({ children }) => {
  return (
    <div className="bg-primary-base mx-auto h-screen w-full">
      {children}
      <div className="flex absolute bottom-0 text-white">
        <Link title="Intro" to="/" />
        <Link title="About" to="/About/" />
        <Link title="Experiences" to="/Experiences/" />
        <Link title="Works" to="/Works/" />
        <Link title="Contact" to="/Contact/" />
      </div>
    </div>
  )
}
