import Navbar from './Components/Navbar/Navbar';
import {Provider} from "react-redux";
import Store from './Components/Store/Store';

function App() {
  return (
    <>
      <Provider store={Store}>
        <Navbar />
      </Provider>
    </>
  );
}

export default App;
