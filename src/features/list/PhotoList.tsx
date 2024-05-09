import { Box, Card, CardMedia, Grid, Pagination, Stack } from "@mui/material"
import { usePhotoList } from "./hooks/usePhotoList"
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { routes } from "../../constants/routes"

const PhotoList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const [page, setPage] = useState(parseInt(query.get('page') || '1', 10))

    useEffect(() => {
        navigate(`${routes.photos}?page=${page}`, { replace: true, state: { page } })
    }, [page, navigate, location.pathname])

    const limit = 24

    const { data, status } = usePhotoList({ page, limit })

    if (status === 'pending') return <p>Loading...</p>
    if (status === 'error') return <p>Error</p>

    const { photos, totalCount } = data

    const pageCount = totalCount === null ? undefined : Math.ceil((+totalCount) / limit)

    return (
        <Stack spacing={3}>
            <Grid container spacing={5}>
                {photos.map(photo => {
                    return (
                        <Grid item xs={12} sm={6} md={2} key={photo.id}>
                            <Link to={routes.photo(photo.id.toString())}>
                                <Card sx={{ height: 150, width: 150 }}>
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