import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Navigation from './components/Shared/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>} />
      </Routes>
    </>
  );
}

export default App;
