import "@/styles/globals.css";
import "@/styles/button.css";
import "@/styles/card.css";
import "@/styles/timeline.css"
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}
