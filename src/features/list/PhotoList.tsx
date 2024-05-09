import { Card, CardMedia, Grid } from "@mui/material"

const photos: [] = []

const PhotoList = () => {

    return (
        <Grid container spacing={3}>
            {photos.map(photo => {
                return (
                    <Grid item xs={12} sm={6} key={photo.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={photo.url}
                                alt={photo.title}
                            />
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export { PhotoList}