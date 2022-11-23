import './App.css';
import store from './store/store'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Blog from './Pages/Blog/Blog';


function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/"></Route>
            <Route path="/create-blog" element={<Blog />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;
