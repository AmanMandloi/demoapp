import React from 'react';
import {Provider, connect} from 'react-redux';
import AppStore from './AppStore';
import AppListing from './Components/AppListing'
import { BrowserRouter } from 'react-router-dom';


function App() {
  const mapStateToProps = (state) =>({});
  const mapDispatchToProps = (dispatch) => ({});
  const RouteApp = connect(mapStateToProps, mapDispatchToProps)(AppListing);

  return (
    <Provider store={AppStore}>
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </Provider>

  );
}
export default App;
