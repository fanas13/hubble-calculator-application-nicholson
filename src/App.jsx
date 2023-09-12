import './App.css';
import theme from './config/theme';
import Home from './routes/FeatureRoutes/Home';

function App() {
  return (
    <div className="App">
      <Home themeConfig={theme} />
    </div>    
  );
}

export default App;
