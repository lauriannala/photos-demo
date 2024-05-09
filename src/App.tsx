import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Container, Typography } from '@mui/material'
import { PhotoList } from './features/list/PhotoList'

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Typography variant="h1" align="center">
            Photos demo
          </Typography>
          <PhotoList />
        </Container>
      </QueryClientProvider>
    </>
  )
}

export default App
