import "../styles/global.css";

// top-level component that is common across all the different pages
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
