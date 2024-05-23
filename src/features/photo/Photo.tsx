import { Typography, CardMedia, Card, Grid } from '@mui/material'
import { useSinglePhoto } from './hooks/useSinglePhoto'
import { useState } from 'react'

const Photo = ({ id }: { id: string }) => {

    const { data: photo, status } = useSinglePhoto({ id })
    const [loaded, setLoaded] = useState(false)

    return (
        <Grid container>
            <Grid item xs={12} sm={8} md={6}>
                <Card>
                    <CardMedia
                        component="img"
                        image={loaded && status == 'success' ? photo.url : "/600x600.svg"}
                        onLoad={() => setLoaded(true)}
                        alt={photo?.title}
                    />
                </Card>
                <Typography variant="body1">
                    {status === 'error' ? 'Error' : photo?.title}
                </Typography>
            </Grid>
        </Grid>
    )
}

export { Photo }