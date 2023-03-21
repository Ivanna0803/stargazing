import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './NavTabs.js';
import Home from './Pages/Home.js';
import Moon from './Pages/Moon.js'



import StarsContainer from './components/StarsContainer.js';

export default function App() {
  return (<Router>
    <div>
      <NavTabs />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        {/* <Route path="planets" element={<Moon />} /> */}
        <Route path="stars" element={<StarsContainer />} />
        <Route path="moon" element={<Moon />} />
        {/* Define a route that will have descendant routes */}

      </Routes>
    </div>
  </Router>

  );
}