import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex space-x-6 mb-5 px-5 h-14 items-center border-b-2">
      <Link href="/">Home</Link>
      <Link href="../components/task/">Tasks</Link>
      <Link href="../components/addTask/">New Task</Link>
    </nav>
  )
}

export default NavBar