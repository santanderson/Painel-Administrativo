import Main from "./components/main"
import Header from "./components/header"
import Preload from "./components/preload";
import { BrowserRouter as Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path='preload' element={<Preload />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
