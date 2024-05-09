import { Container, Typography, CardMedia, Card, Box } from '@mui/material'
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
                <Box my={2}>
                    <Link to={routes.photos}>
                        <Typography variant="body1">
                            Back to list
                        </Typography>
                    </Link>
                </Box>
                <Typography variant="body1" align="center">
                    {photo.title}
                </Typography>
                <Card sx={{ height: 600, width: 600, margin: 'auto' }}>
                    <CardMedia
                        component="img"
                        image={photo.url}
                        alt={photo.title}
                    />
                </Card>
            </Container>
        </>
    )
}

export { Photo }