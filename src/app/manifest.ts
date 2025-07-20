import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hamza Bargaz",
    short_name: "Hamza Bargaz",
    description:
      "Software Engineer based in Morocco, passionate about web development and open source.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/images/hb-light.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/hb-dark.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
