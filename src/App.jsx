import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import theme from './config/theme';
import ResponsiveAppBar from './containers/AppShell/ResponsiveAppBar';
import Home from './routes/FeatureRoutes/Home';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route element={<ResponsiveAppBar {...theme}/>}>
              {/* to be added later, should come here when the user is logged */}
              <Route exact path="/home" element={<Home />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
