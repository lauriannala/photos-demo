import { Container, Typography, Box, Stack, Button } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import { Photo } from '../features/photo/Photo'

const PhotoPage = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    return (
        <>
            <Container>
                <Stack spacing={3} sx={{ mt: 3 }}>
                    <Photo id={id as string} />
                    <Box my={2}>
                        <Button onClick={() => navigate(-1)} variant="contained">
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