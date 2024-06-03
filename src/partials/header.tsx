'use client';

import useSWR from 'swr';

function Header() {
    const fetchData = (url: string) => fetch(url)
        .then((res) => res.json())

    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_URL_API}/category`,
        fetchData,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        })

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <>
            <h1>Header</h1>
        </>
    )
}

export default Header;