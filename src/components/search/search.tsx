import { SearchIcon } from "lucide-react"
import { useRouter } from "next/router"
import { useCallback } from "react"
import { CircleX } from "lucide-react"

export const Search = () => {
    const router = useRouter()
    const query = (router.query.q as string) ?? ''

    const handleSearch =useCallback((e: React.FormEvent) => {
        e.preventDefault()

        if (query?.trim()) {
            router.push(`/blog?q=${encodeURIComponent(query)}`)
        } 
    }, [query, router])

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value

        router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, { 
            shallow: true,
            scroll: false,
        })
    }

    const resetSearch = () => {
        router.push('/blog', undefined, {
            shallow: true,
            scroll: false,
        })
    }

    return (
        <form 
        className="relative group w-full md:w-64 lg:w-72 md:shrink-0"
        onSubmit={handleSearch}
        >
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4 transition-colors duration-200 cursor-pointer group-focus-within:text-blue-300" />
            <input 
            type="text" 
            placeholder="Buscar"
            value={query}
            onChange={ handleQueryChange }
            className="h-10 w-full bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm" />

            {query && (<CircleX 
            className="text-gray-300 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer transition-colors duration-200 hover:text-gray-200"
            onClick={resetSearch}
            />)}
        </form>

    )
}