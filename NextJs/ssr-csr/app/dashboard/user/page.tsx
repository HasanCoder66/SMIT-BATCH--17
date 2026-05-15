"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [users, setUsers] = useState([])

    const getData = async () => {
        const apiRes = await fetch("https://dummyjson.com/users")

        const result = await apiRes.json()

        setUsers(result.users)
    }

    // console.log(users)

    useEffect(() => {
    getData()
    }, [])
  return (
    <div>
      <h1>This is User's Page </h1>

      {/* [{fistname:"uzair", id:1},{fistName:"ayan", id:2}] */}

      {users.map((u:any) => <Link href={`/users/${u.id}`} key={u.id}>{u.firstName}</Link>)}
    </div>
  )
}

export default Page