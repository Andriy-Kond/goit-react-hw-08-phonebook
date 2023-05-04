import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container } from './Container/Container';
import { Header } from './Header/Header';
import { PreLoader } from './Preloader/PreLoader'; // коли іменований export
import Footer from './Footer/Footer'; // коли export default

const Layout = () => {
  return (
    <Container>
      <main>
        <Header />
        <Suspense fallback={<PreLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
