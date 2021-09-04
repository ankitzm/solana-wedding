import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import CertificatePage from './pages/certificatePage';
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/certificate" component={CertificatePage} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
