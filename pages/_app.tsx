import type { AppProps } from "next/app";
import "../styles/globals.css"; // if you have global styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
