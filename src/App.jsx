import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<DefaultLayout />}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
