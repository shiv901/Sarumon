import ErrorPage from './pages/Error-page';
import DexHome from './pages/DexHome'
import Home from './pages/Home';
import Game from './pages/Game';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ThemeProvider from './context/ThemeProvider';


const router = createBrowserRouter([
  {
    path: "/sarudex",
    element: <DexHome />,
  },
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/game',
    element: <Game />
  }
]);

function App() {

  return (
    <div className='App'>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
