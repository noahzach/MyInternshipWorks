import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import {setContext} from '@apollo/client/link/context'


  const httpLink = createHttpLink({
    uri: 'https://dentalcityserver.herokuapp.com/graphql',
  });

  const authLink = setContext((_, {headers}) => {
      const token = localStorage.getItem('accessToken');
      return {
        headers: {
          ...headers,
          authorization: token ? token : ""
        }
      }
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
    })

  ReactDOM.render(
    <ApolloProvider client={client}>
            <App />
          </ApolloProvider>,
    document.getElementById('root')
  );


reportWebVitals();
