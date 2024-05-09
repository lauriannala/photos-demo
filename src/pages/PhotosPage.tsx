
import { Container, Typography } from '@mui/material'
import { PhotoList } from '../features/photo-listing/PhotoList'

const PhotosPage = () => (
    <>
        <Container>
            <Typography variant="h1" align="center">
                Photos demo
            </Typography>
            <PhotoList />
        </Container>
    </>
)

export { PhotosPage }
