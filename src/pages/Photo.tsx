import { Container, Typography, CardMedia, Card, Box, Stack, Button } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useSinglePhoto } from '../features/list/hooks/useSinglePhoto'
import { routes } from '../constants/routes'

const Photo = () => {
    const { id } = useParams<{ id: string }>()

    const { data: photo, status } = useSinglePhoto({ id: id as string })

    if (status === 'pending') return <p>Loading...</p>
    if (status === 'error') return <p>Error</p>

    return (
        <>
            <Container>
                <Stack spacing={3} sx={{ mt: 3 }}>
                    <Box my={2}>
                        <Button component={Link} to={routes.photos} variant="contained">
                            <Typography variant="body1">
                                Back to list
                            </Typography>
                        </Button>
                    </Box>
                    <Typography variant="body1">
                        {photo.title}
                    </Typography>
                    <Card sx={{ height: 600, width: 600 }}>
                        <CardMedia
                            component="img"
                            image={photo.url}
                            alt={photo.title}
                        />
                    </Card>
                </Stack>
            </Container>
        </>
    )
}

export { Photo }