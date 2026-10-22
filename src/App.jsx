import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router";
import { AutoProvider } from "./context/AutoProvider"; //para envolver la aplicacion
import {FavoriteIdProvider} from "./context/FavoriteIdProvider"; //para envolver la aplicacion
function App() {
  return (
    <>
      <AutoProvider>
        <FavoriteIdProvider>
          <BrowserRouter>
            <Layout></Layout>
          </BrowserRouter>
        </FavoriteIdProvider>
      </AutoProvider>
    </>
  );
}

export default App;
