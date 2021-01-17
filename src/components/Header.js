import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useMobile, useClickOutside } from "../hooks"
import Link from "./Link"
import MenuIcon from "../assets/svg/menuIcon.svg"
import cx from "classnames"

export default () => {
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="mb-10 h-24">
      <nav className="" role="navigation">
        <div
          className={cx(
            "px-16 pt-5 flex flex-wrap items-center md:flex-no-wrap"
          )}
          style={{ backgroundColor: isMobile && isOpen && "rgb(0,0,0,0.3)" }}
        >
          <div className="flex items-center mr-4 md:mr-8">
            <Link to="/">Hamza</Link>
          </div>
          <div className="ml-auto md:hidden">
            <button
              className="flex items-center px-3 py-2 rounded focus:outline-none"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon className="w-6 h-6 text-white fill-current" />
            </button>
          </div>
          <div className="w-full md:w-auto md:flex-grow md:flex md:items-center text-white">
            {isMobile ? isOpen && <ListMenuMobile /> : <ListMenu />}
          </div>
        </div>
      </nav>
    </header>
  )
}

const ListMenu = ({}) => {
  return (
    <ul className={cx("flex flex-row items-center ml-auto mb-0")}>
      <Link title="Intro" to="/" className="" />
      <Link title="About" to="/about/" />
      <Link title="Blog" to="/blog/" />
      <Link title="Get in Touch" to="/contact/" />
    </ul>
  )
}

const ListMenuMobile = ({}) => {
  return (
    <ul className={cx("flex-col mt-4 -mx-4 pt-4 font-bold text-center")}>
      <Link title="Intro" to="/" className="" />
      <Link title="About" to="/about/" />
      <Link title="Blog" to="/blog/" />
      <Link title="Get in Touch" to="/contact/" />
    </ul>
  )
}
