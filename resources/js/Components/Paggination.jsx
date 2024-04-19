import { Link } from '@inertiajs/react'
import React from 'react'

const Paggination = ({links}) => {
  return (
    <nav className='text-center mt-4 text-gray-200'>
      {links.map(link => (
        <Link
        preserveScroll
        key={link.label}
        className={"inline-block px-4 mx-2 py-2 rounded-lg text-md " + (link.active ? " bg-gray-950 " : " ") + (!link.url ? "!text-gray-500 cursor-not-allowed" : " hover:bg-gray-950 ")} dangerouslySetInnerHTML={{__html:link.label}}
        href={link.url || " "}>

        </Link>
      ))}
    </nav>
  )
}

export default Paggination
