import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { PhotosPage } from './pages/PhotosPage';
import { PhotoPage } from './pages/PhotoPage';
import { routes } from './constants/routes';

const router = createBrowserRouter([
  {
    path: routes.photos,
    element: <PhotosPage />,
  },
  {
    path: routes.photo(':id'),
    element: <PhotoPage />,
  }
]);

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}

export default App
