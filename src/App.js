import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import PageWrapper from 'components/common/PageWrapper';
import RSWordleErrorBoundary from 'components/common/RSWordleErrorBoundary';
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
        <RSWordleErrorBoundary showSideNav={showSideNav} t={t}>
          {showSideNav && <SideNav />}
          <main id={MAIN_ID} {...(showSideNav ? { className: 'page-with-nav' } : {})}>
            <Routes>
              {routes.map(route => (
                <Route
                  key={`route-${route.path}`}
                  {...route}
                  element={
                    <PrivateRoute {...route} authenticated={authenticated} isAdminUser={isAdmin}>
                      <PageWrapper title={route.title} subtitle={route.subtitle}>
                        {route.element}
                      </PageWrapper>
                    </PrivateRoute>
                  }
                />
              ))}
            </Routes>
          </main>
        </RSWordleErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
