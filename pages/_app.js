import "../styles/globals.scss";
import Background from "../containers/Background/Background";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <Background>
            <Component {...pageProps} />
        </Background>
    );
}
