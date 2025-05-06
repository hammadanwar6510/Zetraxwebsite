import React from 'react'
import Banner from './main-banner/Banner'
import Marqee from './marqelanding/Marqee'
import Quantumprotocol from './quantumprotocol/Quantumprotocol'
import Quantum from './quantum/Quantum'
import Quantumtools from './quantumtools/Quantumtools'
import Securitytools from './securitytools/Securitytools'
import Mobilesecurity from './mobilesecurity/Mobilesecurity'
import Getstarted from './getstarted/Getstarted'
import Footer from './footer/Footer'
import Header from './header/Navbar'

const Landing = () => {
    return (
        <>
            <Header />
            {/* <Banner />
            <Marqee /> */}
            <Quantumprotocol />
            <Quantum />
            <Quantumtools />
            <Securitytools />
            <Mobilesecurity />
            <Getstarted />
            <Footer />
        </>
    )
}

export default Landing
