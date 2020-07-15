// pages/_app.js
import '../styles/main.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { withRouter } from 'next/router';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default withRouter(MyApp);
