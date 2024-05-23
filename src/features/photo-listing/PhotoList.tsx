import { Box, Card, CardMedia, Grid, Pagination, Stack, Typography } from "@mui/material"
import { usePhotoList } from "./hooks/usePhotoList"
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { routes } from "../../constants/routes"
import { Photo } from "./types"

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

    const { photos: photosResponse, totalCount: totalCountResponse } = data ?? { photos: [], totalCount: null }

    const [photos, setPhotos] = useState<(Photo & { loaded: boolean })[]>([])
    const [pageCount, setPageCount] = useState(0)

    useEffect(() => {
        if (photosResponse.length === 0) return

        setPhotos(photosResponse.map(photo => ({ ...photo, loaded: false })))
    }, [photosResponse])

    useEffect(() => {
        if (totalCountResponse === null) return

        setPageCount(Math.ceil((+totalCountResponse) / limit))
    }, [totalCountResponse])

    return (
        <Stack spacing={1}>
            {status === 'pending' && <Typography variant="body1">Loading photos..</Typography>}
            {status === 'error' && <Typography variant="body1">Error on fetching photos</Typography>}
            {status === 'success' && <><Box display="flex" justifyContent="center">
                <Pagination page={page} count={pageCount} onChange={(_evt, pageUpdate) => {
                    setPage(pageUpdate)
                }} />
            </Box>
                <Grid container spacing={1}>
                    {photos.map(photo => {
                        return (
                            <Grid item xs={12} sm={4} lg={2} key={photo.id}>
                                <Link to={routes.photo(photo.id.toString())}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            image={photo.loaded ? photo.thumbnailUrl : "/150x150.svg"}
                                            alt={photo.title}
                                            onLoad={() => setPhotos(previous => previous.map(p => p.id === photo.id ? { ...p, loaded: true } : p))}
                                        />
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </>}
        </Stack>
    )
}

export { PhotoList }