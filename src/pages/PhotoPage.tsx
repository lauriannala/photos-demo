import { Container, Typography, Box, Stack, Button } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { routes } from '../constants/routes'
import { Photo } from '../features/photo/Photo'

const PhotoPage = () => {
    const { id } = useParams<{ id: string }>()

    return (
        <>
            <Container>
                <Stack spacing={3} sx={{ mt: 3 }}>
                    <Photo id={id as string} />
                    <Box my={2}>
                        <Button component={Link} to={routes.photos} variant="contained">
                            <Typography variant="body1">
                                Back to list
                            </Typography>
                        </Button>
                    </Box>
                </Stack>
            </Container>
        </>
    )
}

export { PhotoPage }