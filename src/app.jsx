import "styles/global.css";
import { Suspense } from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
