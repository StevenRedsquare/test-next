import React from 'react'
import Link from 'next/link'

const Sidebar = ({}) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/users">User</Link>
                </li>
                <li>
                    <Link href="/vehicle-types">vehicles types</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar