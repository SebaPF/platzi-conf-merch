/* eslint-disable no-console */

// CREDENCIALES PARA API PAYPAL // GOOGLE MAPS KEY: uez787mzwGmowVazlfjfsq8fMaSA //
// sb-zzev13340862@personal.example.com // 7JS|woF_ (Usuario y Pass)
// access_token$sandbox$tbvvpkyf3rz7skmk$b215086b5638aceb1cc380e1c1dc376c
// U335WTJHPSHZW // ID ACCOUNT
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  console.log(initialState);
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
