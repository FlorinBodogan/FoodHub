import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./Components/home/home";
import NavBar from "./Components/navbar/navbar";
import Login from './Components/login/login';
import Posts from './Components/posts/posts';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <div className="App">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/posts" element={<Posts />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
