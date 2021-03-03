import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import Router from './config/routes.js'
import rootReducer from "./store/reducers/index"
import './App.css';

const store = createStore(rootReducer,  applyMiddleware(thunkMiddleware))
function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Router/>
          </div>
      </Provider>
  );
}

export default App;
