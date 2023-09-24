import { useMediaQuery } from "react-responsive";

export default function useMobile() {
  return !useMediaQuery({
    query: "(min-width: 768px)",
  });
}
