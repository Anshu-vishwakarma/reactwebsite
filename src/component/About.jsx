import React, { Component } from 'react'
import Cards from './Cards'
import Footer from './Footer'

export class About extends Component {
    

    render() {
        return (
            <>
            <div>
               <h1>ABOUT PAGE</h1>
            </div>
             <div> <Footer/> </div>
             <div> <Cards/> </div>
             </>
        )
    }
}

export default About
