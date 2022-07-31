import React from 'react';
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Login from "./components/Login.jsx"
import SignUp from "./pages/SignUp.jsx"

import Admin from "./pages/Admin.jsx" 

import HomeFeed from './pages/HomeFeed';
import SinglePosting from './pages/SinglePosting';
import MyListings from './components/Account-Components/My-Listings';
import NewPost from './pages/New-Post';
import StarRating from './components/StarRating.jsx';
import OtherUserProfile from './pages/OtherUserProfile';
import Applied from './components/Account-Components/Applied';
import Applications from './components/Account-Components/Applications';
import UpdatePosting from './pages/UpdatePosting';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      {/* <StarRating rating={5} />  */}


      <Router>
        <>
          <Routes>

            <Route path="/" element={<Login />}/>

            <Route path="/signup" element={<SignUp />}/>

            <Route path="/home" element={<HomeFeed />} />

            <Route path="/posting/:id" element={<SinglePosting />} />

            <Route path="/user/:id" element={<OtherUserProfile />} />

            <Route path="/me/:id" element={<Admin />} />

            <Route path="/myListings/:id" element={<MyListings />} />

            <Route path="/me/newPost/:id" element={<NewPost />} />

            

  

            <Route path="/myApplied/:id" element={<Applied />} />

            <Route path="/myApplicationsReceived/:id" element={<Applications />} />

            <Route path="/updatePosting/:id" element={<UpdatePosting />} />
            
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;