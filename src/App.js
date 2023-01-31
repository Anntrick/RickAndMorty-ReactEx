import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Containers/Home/Home'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { CharactersList } from './Containers/CharactersList/CharactersList';



const App = () => {
 
  return (
      <div className="App ">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharactersList />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
