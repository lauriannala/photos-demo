
import { Container, Typography } from '@mui/material'
import { PhotoList } from '../features/list/PhotoList'

const Photos = () => (
    <>
        <Container>
            <Typography variant="h1" align="center">
                Photos demo
            </Typography>
            <PhotoList />
        </Container>
    </>
)

export { Photos }
