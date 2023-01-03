
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import MovieDetail from './pages/MovieDetail';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './pages/Protected';


function App() {
  
  return (
    <AuthContextProvider>
    <Routes>
      <Route path="/" element={
        <Protected>
          <Login/>
        </Protected>
      } />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/home" element={<MainPage/>} />
        <Route path="/:movieId" element={<MovieDetail/>} />
    </Routes>
    </AuthContextProvider>
    
  );
}

export default App;
