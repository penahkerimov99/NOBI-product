import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Signin } from './components/Signin/Signin';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Register/Register';
import { Route, Routes } from 'react-router-dom';
import { Settings } from './components/Settings/Settings';
import { Profile } from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='*' element={<Main/>} />
        <Route path='/signin' element={<Signin />}/>
        <Route path='/register' element={<Register />}/>
       <>
       <Route path='*/signin/profile' element={<Profile />}/>
       <Route path='*/signin/profile/settings' element={<Settings />}/>
       </>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
