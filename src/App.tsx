import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StateProvider from './context/StateProvider';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  return (
    <StateProvider>
      <div className='min-h-screen flex flex-col justify-center items-center'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StateProvider>
  );
}

export default App;
