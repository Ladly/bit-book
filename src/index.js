import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { HashRouter } from 'react-router-dom'

import { App } from './app/App'
// import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css'


ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>
	, document.getElementById('root'))
registerServiceWorker()
