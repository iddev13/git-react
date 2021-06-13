
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store-redux';
import HeaderContainer from '../header/HeaderContainer';
import Main from '../main/Main';
import './App.css';

const AppContainer = () => {

  const catchAllUnhandleedErrors = (reason, promise) => {
    alert('Some error!!!');
    console.error(reason)
  }

  useEffect(() => {
    window.addEventListener('unhandledrejection', catchAllUnhandleedErrors);
    console.log('useEffect componentDidMount');
    return () => {
      window.removeEventListener('unhandledrejection', catchAllUnhandleedErrors);
      console.log('useEffect componentWillUnmount');
    }
  }, [])


  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

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

