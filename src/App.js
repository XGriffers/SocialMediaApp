import "./App.css"
import { Home } from "./Pages/Home/Home";


function App() {
  return (
    <div className="App">
      <div class="blur" style={{top: '-18%', right: '0'}}>
      </div>
      <div class="blur" style={{top: '36%', left: '-8rem'}}>
      </div>
      <Home/>
    </div>
  );
}

export default App;
