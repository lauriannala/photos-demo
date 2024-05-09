import { Typography, CardMedia, Card } from '@mui/material'
import { useSinglePhoto } from './hooks/useSinglePhoto'
import { useState } from 'react'

const Photo = ({ id }: { id: string }) => {

    const { data: photo, status } = useSinglePhoto({ id })
    const [loaded, setLoaded] = useState(false)

    return (
        <>
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
        </>
    )
}

export { Photo }