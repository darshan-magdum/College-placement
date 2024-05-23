import './App.css';
import {RouterProvider} from 'react-router-dom'
import router from './router/config';

function App() {
  return (
    <div className="App">
     <h1>College Placement Project</h1>
     <RouterProvider router={router}>

     </RouterProvider>
    </div>
  );
}

export default App;
