import './App.css';
import store from './store/store'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Blog from './Pages/Blog/Blog';
import Blogs from './Components/Blog/Blogs';
import BlogDetails from './Components/Blog/BlogDetail';
import UserProfile from './Components/Auth/UserProfile';


function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Blogs />}></Route>
            <Route path="/create-blog" element={<Blog />}></Route>
            <Route path="/details" element={<BlogDetails />}></Route>
            <Route path="/details" element={<BlogDetails />}></Route>
            <Route path="/profile" element={<UserProfile />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;
