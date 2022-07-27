import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Login from "./components/Login"


const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Login />
      {/* <Router>
        <>

          <Routes>

          </Routes>
        </>
      </Router> */}
    </ApolloProvider>
  );
}

export default App;