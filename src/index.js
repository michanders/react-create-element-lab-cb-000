import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
const awesome = React.createElement('h1', {}, 'An Awesome Person');
const learn = React.createElement('p', {}, 'Who is learning React');
const js = React.createElement('li', {}, "JavaScript");
const js = React.createElement('li', {}, "React");
const js = React.createElement('li', {}, "Movies");
const js = React.createElement('li', {}, "IceCream");


const list = React.createElement('ul', {className: 'my-interests'}, []);


const meInReact = React.createElement('div', {className: 'me'}, [awesome, learn, ]);

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
