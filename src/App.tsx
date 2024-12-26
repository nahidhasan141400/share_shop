import { Provider } from "react-redux";
// import store from "./store";
import store, { persistor } from "@store";
import Router from "@/router/Router";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
