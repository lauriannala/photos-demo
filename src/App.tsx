import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Photos } from './pages/Photos';
import { Photo } from './pages/Photo';
import { routes } from './constants/routes';

const router = createBrowserRouter([
  {
    path: routes.photos,
    element: <Photos />,
  },
  {
    path: routes.photo(':id'),
    element: <Photo />,
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
