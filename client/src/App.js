import React from 'react';
import "./styles/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Login from "./components/Login.jsx"

import Account from "./pages/Account.jsx"

import HomeFeed from './pages/HomeFeed';
import SinglePosting from './pages/SinglePosting';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      <Account />

      {/* <Login /> */}

    


      <Router>
        <>

          <Routes>
            <Route
                path="/" 
                element={<HomeFeed />} 
              />
            <Route
                path="/posting/:id" 
                element={<SinglePosting />} 
              />

          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;