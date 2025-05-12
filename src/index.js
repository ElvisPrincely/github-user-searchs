import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);



