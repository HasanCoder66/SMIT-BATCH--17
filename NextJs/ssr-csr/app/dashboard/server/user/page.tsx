
    const getData = async () => {
        const apiRes = await fetch("https://dummyjson.com/users")


        // console.log("api response -->",apiRes)
        const result = await apiRes.json()

        return result

    }

    // interface userObj  {
    //     firstName: string,

    // }

const Page = async () => {
    
    const {users} = await getData()

    console.log("get users in server component -->",users)

  return (
    <div>
      <h1>This is User's Page server side rendering... </h1>

      {/* [{fistname:"uzair", id:1},{fistName:"ayan", id:2}] */}

      {users.map((u:any) => <li key={u.id}>{u.firstName}</li>)}
    </div>
  )
}

export default Page