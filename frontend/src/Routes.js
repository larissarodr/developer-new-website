import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ReactGA from 'react-ga';

import Main from './pages/Main';
import Solucoes from './pages/Solucoes';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';

const history = createBrowserHistory();
history.listen(location => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
});

export default class AppRoutes extends Component {
	componentDidMount() {
		ReactGA.pageview(window.location.pathname)
	}

	render() {
		return (
			<BrowserRouter history={history} basename={window.location.pathname || ''}>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/solucoes' component={Solucoes}/>
          <Route path='/contato' component={Contato}/>
          <Route path='/empresa' component={Empresa}/>
        </Switch>
      </BrowserRouter>
		)
	}
}