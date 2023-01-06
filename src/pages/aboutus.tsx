import { HeadFC, PageProps } from "gatsby"
import * as React from "react"

const AboutUs:React.FC<PageProps> = () =>{
    return(
        <h1>About Us</h1>
    )
}

export default AboutUs
export const Head: HeadFC = () =><title>About Us</title>