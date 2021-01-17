import React from "react"
import { Link } from "gatsby"
import cx from "classnames"

export default ({ title, to, className }) => {
  return (
    <Link
      to={to}
      className={cx("block px-4 py-1 md:p-4", className)}
      activeClassName="text-secondary-base"
    >
      {title}
    </Link>
  )
}
