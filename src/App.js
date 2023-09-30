import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Home from './Home/Home';




 function App() {
  return <>
  <Provider store={store}>
    <Home/>
  </Provider>
  </>
}

export default App;
