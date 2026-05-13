import React from 'react'

// {
//     id : "12"
// }

type UserDetailProp = {
    params:Promise<{
    id: string;
  }>
}

const UserDetailPage = async ({params}:UserDetailProp) => {
    console.log("params -->",params)

    const resolveParam = await params
    console.log(resolveParam.id)
  return (
    <div>UserDetailPage {resolveParam.id}</div>
  )
}

export default UserDetailPage