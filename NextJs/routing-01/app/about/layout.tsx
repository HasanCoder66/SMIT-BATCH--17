import React from 'react'

const AboutLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>

<div>About Nav</div>
<div>{children}</div>
<div>About footer</div>

    </div>
  )
}

export default AboutLayout