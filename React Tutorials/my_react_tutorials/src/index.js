import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Greet , CarColor} from './Greet';
import ShowPersonalDetails from './Props';
import {Football , ClickButton} from './Events';
import Parent from './ReactMemo';
import FavoriteColor from './ReactHooks';
import FavoriteColor1 from './useState';

const myElement1 = <h1>I Love JSX</h1>
const expression = <h1>React is {5 + 5} times better with JSX.</h1>
const myElement = (
  <div>
    <p>My name is Ayon Chatterjee.</p>
    <p>I live in Ranchi.</p>
  </div>
) ;

const x = 15 ;

const myElement2 = <h1>{x < 10 ? "Hello" : "Goodbye"}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <p>Hallo</p>
    {myElement1}
    {expression}
    {myElement}
    {myElement2}
    <Greet />
    <ShowPersonalDetails />
    <Football />
    <ClickButton />
    <Parent />
    <FavoriteColor />
    <FavoriteColor1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
