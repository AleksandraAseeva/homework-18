import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./Redux/store";
import { router } from "./route";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/store";
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        текст
        <HashRouter basename="/homework-18">
          <RouterProvider router={router} />
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
