import './App.css';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Menu from './Menu';
import Dashboard from './Dashboard';
import { Route, Routes } from "react-router-dom";
import { useLocalState } from './util/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [jwt, setJwt] = useLocalState("", "jwt");

  return (
    <Routes>
      <Route path="/menu" element={
        <PrivateRoute>
          <Menu />
        </PrivateRoute>
      } />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
