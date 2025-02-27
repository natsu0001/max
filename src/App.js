
import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';

function App() {
  return (
    <div className="App">
      <Home/>
      <List/>
      <New/>
      <Single/>
    </div>
  );
}

export default App;
