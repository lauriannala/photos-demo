import { Card, CardMedia, Grid } from "@mui/material"
import { usePhotoList } from "./hooks/usePhotoList"

const PhotoList = () => {
    const { data: photos, status } = usePhotoList({ start: 0, limit: 24 })

    if (status === 'pending') return <p>Loading...</p>
    if (status === 'error') return <p>Error</p>

    return (
        <Grid container spacing={3}>
            {photos.map(photo => {
                return (
                    <Grid item xs={12} sm={6} md={2} key={photo.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={photo.thumbnailUrl}
                                alt={photo.title}
                            />
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export { PhotoList }