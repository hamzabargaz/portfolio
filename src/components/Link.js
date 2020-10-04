import React from "react"
import { Link } from "gatsby"

export default ({ title, to }) => {
  return (
    <Link
      to={to}
      className="block px-4 py-1 md:p-2 lg:px-4 text-sm"
      activeClassName="text-secondary-base"
    >
      {title}
    </Link>
  )
}
