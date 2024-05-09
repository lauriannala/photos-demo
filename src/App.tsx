import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Photos } from './pages/Photos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Photos />,
  },
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
