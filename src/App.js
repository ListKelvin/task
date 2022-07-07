import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from "react";
import Home from './routes/home/home.component';
import Todolist from './routes/todolist/Todolist'
import Navigation from './routes/navigation/Navigation.component'
import Login from './routes/login-page/Login'
import Protect from './Protect';
const Shop = () => {
  return <h1>I am the shop page</h1>;
};

export const UserContext = createContext();

const App = () => {
  const [user,setUser] = useState({ loggedIn: false})
  return (
    <UserContext.Provider value={{ user, setUser }}>
    <Routes>
      <Route  path='/' element={<Login/>}/>
      <Route  element={<Protect/> } >
        <Route path='/home' element={<Navigation/>}>
          <Route index  element={<Home />}/>
          <Route path='shop' element={<Shop />} />
          <Route path='todo' element={<Todolist />}/>
        </Route>
      </Route>
    </Routes>
    </UserContext.Provider>
  );
};

export default App;