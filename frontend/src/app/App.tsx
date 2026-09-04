import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

import '@/styles/index.scss';
import '@/styles/_base.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
