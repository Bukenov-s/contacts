import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import store, { persistor, history } from '~/redux/store';
import { Wrapper } from './components/layout/Wrapper';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import ContactsPage from '~/containers/ContactsPage';
import EditContactPage from '~/containers/EditContactPage';
import AddContactPage from '~/containers/AddContactPage';

require('./styles/reset.scss');
require('typeface-montserrat');
require('./styles/global.scss');

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <main>
        <ConnectedRouter history={history}>
          <Navbar />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={ContactsPage} />
              <Route exact path="/edit/:id" component={EditContactPage} />
              <Route exact path="/add" component={AddContactPage} />
            </Switch>
          </Wrapper>
        </ConnectedRouter>
        <Footer />
      </main>
    </PersistGate>
  </Provider>
);

export default hot(App);
