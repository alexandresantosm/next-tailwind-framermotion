import { AnimateSharedLayout } from 'framer-motion';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

import '../styles/global.css';
import '../styles/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  );
}
export default App;
