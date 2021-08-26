import "../styles/globals.scss";
import Background from "../containers/Background/Background";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { AppProps } from "next/dist/next-server/lib/router/router";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Background>
                <Component {...pageProps} />
            </Background>
        </Provider>
    );
}
