import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import PageWrapper from 'components/common/PageWrapper';
import ManuFacturaErrorBoundary from 'components/common/ManuFacturaErrorBoundary';
import PrivateRoute from 'components/routes/PrivateRoute';
import SideNav from 'components/SideNav';
import { MAIN_ID } from 'constants/componentsIds';
import useTranslation from 'hooks/useTranslation';
import useAuth from 'hooks/useAuth';
import routes from 'routes';

import 'styles/variables.css';
import './App.css';

function App() {
  const t = useTranslation();
  const {
    authenticated,
    user: { isAdmin },
  } = useAuth();

  const showSideNav = authenticated;

  return (
    <div>
      <Helmet>
        <title>{t('global.pageTitle')}</title>
      </Helmet>
      <BrowserRouter>
        <ManuFacturaErrorBoundary showSideNav={showSideNav} t={t}>
          <main id={MAIN_ID} className="page-with-nav">
            <Routes>
              {routes.map(route => (
                <Route
                  key={`route-${route.path}`}
                  {...route}
                  element={
                    <PrivateRoute {...route} authenticated={authenticated} isAdminUser={isAdmin}>
                      {route.showSideNav && <SideNav />}
                      <PageWrapper
                        title={route.title}
                        subtitle={route.subtitle}
                        showSideNav={route.showSideNav}
                      >
                        {route.element}
                      </PageWrapper>
                    </PrivateRoute>
                  }
                />
              ))}
            </Routes>
          </main>
        </ManuFacturaErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
