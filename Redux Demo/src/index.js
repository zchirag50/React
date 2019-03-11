import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import App from './Components/app';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';

// const API_key = "";



// // class App extends Component {
// //   constructor(props) {
// //     super(props);
// //   }
 
// //   render() {
// //     return (
// //       <div>
// //         <App/>
// //         </div>
// //     );
// //   }
// // }

// //ReactDOM.render(<App />, document.querySelector('.container'));
// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
