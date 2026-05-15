import React from 'react'
type IdCompKiShakal ={
    params:Promise<{
id:string
    }>
}
const page = async ({params}:IdCompKiShakal) => {

    const resolveParam = await params

        const getData = async () => {
        const apiRes = await fetch(`https://dummyjson.com/users/${resolveParam.id}`)


        // console.log("api response -->",apiRes)
        const result = await apiRes.json()

        return result

    }

  return (
    <div>page</div>
  )
}

export default page