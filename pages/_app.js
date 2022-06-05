import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { ModalProvider } from "react-simple-hook-modal";
import { FcsProvider } from "../context/FscContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://aak9k46wti6v.usemoralis.com:2053/server"
      appId="SXirNpIMaoPkDdMIt9mmycKDFQe52VwNBzkJpd37"
    >
      <FcsProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </FcsProvider>
    </MoralisProvider>
  );
}

export default MyApp;
