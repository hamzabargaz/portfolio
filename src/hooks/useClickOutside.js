import { useEffect } from "react"
import * as R from "ramda"

export default (ref, onClickOutside, { shouldEnvoke = R.T } = {}) => {
  const handleClickOutside = event => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      shouldEnvoke(event.target)
    ) {
      onClickOutside()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })
}
