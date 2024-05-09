import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "../../../constants/queryKeys"
import { urls } from "../../../constants/urls"
import { Photo } from "../types"


const useSinglePhoto = ({ id }: { id: string }) => {
    const url = new URL(urls.photo(id))

    return useQuery({
        queryKey: [queryKeys.photo, { id }],
        queryFn: async () => {
            const response = await fetch(url)

            return response.json() as Promise<Photo>
        }
    })
}

export { useSinglePhoto }