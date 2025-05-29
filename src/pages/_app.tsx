import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/unifont/400.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '@/layouts/layout';
import { useRouter } from 'next/router';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Don't apply layout to home page
  if (router.pathname === '/') {
    return <Component {...pageProps} />;
  }

  // Apply layout to other pages
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
