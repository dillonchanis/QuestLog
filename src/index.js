import React from 'react';
import { render } from 'react-dom';

import App from './App';
import AllQuests from './components/AllQuests';

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

const Root = () => {
	return (
		<App />
	)
}

render(<Root/>, document.querySelector('#root'));
