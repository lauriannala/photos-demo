import { Container, Typography, CardMedia, Card, Box, Stack, Button } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useSinglePhoto } from '../features/list/hooks/useSinglePhoto'
import { routes } from '../constants/routes'
import { useState } from 'react'

const Photo = () => {
    const { id } = useParams<{ id: string }>()

    const { data: photo, status } = useSinglePhoto({ id: id as string })
    const [loaded, setLoaded] = useState(false)

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
                        {status === 'error' ? 'Error' : photo?.title}
                    </Typography>
                    <Card sx={{ height: 600, width: 600 }}>
                        <CardMedia
                            component="img"
                            image={loaded && status == 'success' ? photo.url : "/600x600.svg"}
                            onLoad={() => setLoaded(true)}
                            alt={photo?.title}
                        />
                    </Card>
                </Stack>
            </Container>
        </>
    )
}

export { Photo }