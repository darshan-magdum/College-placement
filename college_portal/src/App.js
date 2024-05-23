import './App.css';
import {RouterProvider} from 'react-router-dom'
import router from './router/config';
import NavBar from './componets/Navbar/Navbar';
import Footer from './componets/Footer/Footer';

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}>
<NavBar/>
<Footer/>
     </RouterProvider>
    </div>
  );
}

export default App;
