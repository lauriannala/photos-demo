import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "../../../constants/queryKeys"
import { urls } from "../../../constants/urls"
import { Photo } from "../types"


const usePhotoList = ({ start, limit }: { start: number, limit: number }) => {
    const url = new URL(urls.photos)

    url.searchParams.append('_start', start.toString())
    url.searchParams.append('_limit', limit.toString())

    return useQuery({
        queryKey: [queryKeys.photos],
        queryFn: async () => {
            const response = await fetch(url)
            return response.json() as Promise<Photo[]>
        }
    })
}

export { usePhotoList }