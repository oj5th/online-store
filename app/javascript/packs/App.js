import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import modules from '../components/navRoutes';
import DetailProductContainer from "../containers/DetailProductContainer";
import CreateProductContainer from "../containers/CreateProductContainer";
import EditProductContainer from "../containers/EditProductContainer";

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
      <Router>
        <div className="App">
          <Route path="/detail/:id" exact component={DetailProductContainer} />
          <Route path="/new" exact component={CreateProductContainer} />
          <Route path="/edit/:id" exact component={EditProductContainer} />
          <header className="App-header">
            <ul className="App-nav">
              {modules.map(module => (
                  <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
                    <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
                  </li>
              ))}
            </ul>
          </header>
          <div className="App-content">
            {modules.map(module => (
              <Route {...module.routeProps} key={module.name} />
            ))}
          </div>
        </div>
      </Router>
  );
}

export default App;
