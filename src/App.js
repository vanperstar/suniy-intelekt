import { Fragment } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './modules/store/store'
import SteppApp from './modules/stepper/stepper';

function App() {
  return (
    <div>
      <Fragment>
        <Provider store={store}>
          <SteppApp/>
        </Provider>
      </Fragment>
    </div>
  );
}

export default App;
