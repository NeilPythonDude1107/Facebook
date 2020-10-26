import React from 'react'
import Main from './components/main'
import {StateProvider} from './components/config/stateProvider'
import reducer, {initialState} from './components/config/reducers/reducer'

function App() {
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Main />
      </StateProvider>
    </div>
  );
}

export default App;
