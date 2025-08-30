
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



import Home from './pages/Home';
import AssetMasterForm from './pages/AssetMaster/AssetMaster';
import StationMaster from './pages/StationMaster/StationMaster';
import TopbarHeader from './components/Topbar/Topbar';
import DashboardLayout from './AppLayout/DashboardLayout';
import MainLayout from './Layout/MainLayout';
import Errorpage from './Layout/ErrorPage';



function App() {
  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'station-master',
          element: <StationMaster />
        },
        {
          path: 'asset-master',
          element: <AssetMasterForm />
        },
        {
          path: '*',
          element: <Errorpage />
        }
      ]
    }
  ]);
  
  return <RouterProvider router={myRouter} />
}

export default App
