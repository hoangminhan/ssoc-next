import React from 'react'

type Props = {
   infoWeb: string
}

const AboutSSOC = ({ infoWeb }: Props) => {
   return (
      <div>
         {infoWeb}
         <p>about ssoc</p>
      </div>
   )
}
export default AboutSSOC
