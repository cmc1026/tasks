import Link from 'next/link'
import React from 'react'
import { RxActivityLog } from "react-icons/rx";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 mb-5 px-5 h-14 items-center border-b-2">
      <Link href="/" ><RxActivityLog/></Link>
      <Link href="../components/task/">Tasks</Link>
      <Link href="../components/addTask/">New Task</Link>
    </nav>
  )
}

export default NavBar

