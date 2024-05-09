import { Box, Card, CardMedia, Grid, Pagination, Stack } from "@mui/material"
import { usePhotoList } from "./hooks/usePhotoList"
import { useState } from "react"
import { Link } from "react-router-dom"
import { routes } from "../../constants/routes"

const PhotoList = () => {
    const limit = 24
    const [page, setPage] = useState(1)

    const { data, status } = usePhotoList({ page, limit })

    if (status === 'pending') return <p>Loading...</p>
    if (status === 'error') return <p>Error</p>

    const { photos, totalCount } = data

    const pageCount = totalCount === null ? undefined : Math.ceil((+totalCount) / limit)

    return (
        <Stack spacing={3}>
            <Grid container spacing={3}>
                {photos.map(photo => {
                    return (
                        <Grid item xs={12} sm={6} md={2} key={photo.id}>
                            <Link to={routes.photo(photo.id.toString())}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        image={photo.thumbnailUrl}
                                        alt={photo.title}
                                    />
                                </Card>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
            <Box display="flex" justifyContent="center">
                <Pagination page={page} count={pageCount} onChange={(_evt, pageUpdate) => {
                    setPage(pageUpdate)
                }} />
            </Box>
        </Stack>
    )
}

export { PhotoList }