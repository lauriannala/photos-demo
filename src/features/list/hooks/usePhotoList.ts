import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "../../../constants/queryKeys"
import { urls } from "../../../constants/urls"
import { Photo } from "../types"


const usePhotoList = ({ page, limit }: { page: number, limit: number }) => {
    const url = new URL(urls.photos)

    url.searchParams.append('_page', page.toString())
    url.searchParams.append('_limit', limit.toString())

    return useQuery({
        queryKey: [queryKeys.photos, { page, limit }],
        queryFn: async () => {
            const response = await fetch(url)

            if (response.status !== 200) throw new Error('Failed to fetch')

            const totalCount = response.headers.get('x-total-count')
            const photos = await response.json() as Photo[]
            return { photos, totalCount }
        }
    })
}

export { usePhotoList }