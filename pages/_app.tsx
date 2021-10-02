import type { AppProps } from "next/app";
import { wrapper } from "redux/store";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
