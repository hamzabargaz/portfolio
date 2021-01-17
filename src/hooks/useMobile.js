import { useMediaQuery } from "react-responsive"

export default () => {
  return useMediaQuery({
    query: "(max-width: 767px)",
  })
}
