
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store-redux';
import HeaderContainer from '../header/HeaderContainer';
import Main from '../main/Main';
import './App.css';

const AppContainer = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Main />
    </div>
  );
}

export default AppContainer;

