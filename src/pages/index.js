import React from "react"

import Layout from '../components/layout';

import IphoneX from '../assets/img/iphonex.inline.svg'
import profile from '../assets/img/Profile.jpg'
import home from '../assets/img/Home.jpg'
const Home = () => (
    <Layout>
        <div className="Landing">
            <div className="Header">
                <div className="Header-Text-Container">
                    <div className="Title">
                        The new wave in social media
                    </div>
                    <div className="SubTitle">
                        Wave helps people connect: without ads, like buttons, or distractions.
                    </div>
                </div>
                <div className="Iphone-Background">
                    <div className="device">
                        <IphoneX className="device IphoneX rotate-right iphone-first iphone-right-first" />
                        <div className="device-content-container rotate-right device-content-container-first device-content-container-right-first">
                            <div className="container overflow-hidden">
                                <img src={profile} alt="Wave App Profile Page"/>
                            </div>
                        </div>
                    </div>
                    <div className="device">
                        <IphoneX className="device IphoneX rotate-right iphone-second iphone-right-second" />
                        <div className="device-content-container rotate-right device-content-container-right-second device-content-container-second">
                            <div className="container">

                            </div>
                        </div>
                    </div>
                    <div className="device">
                        <IphoneX className="device IphoneX rotate-right iphone-third iphone-right-third" />
                        <div className="device-content-container rotate-right device-content-container-right-third device-content-container-third">
                            <div className="container">

                            </div>
                        </div>
                    </div>
                    <div className="device">
                        <IphoneX className="device IphoneX rotate-left iphone-first iphone-left-first" />
                        <div className="device-content-container rotate-left device-content-container-left-first device-content-container-first">
                            <div className="container">
                                <img src={home} alt="Wave App Home Page"/>
                            </div>
                        </div>
                    </div>
                    <div className="device">
                        <IphoneX className="device IphoneX rotate-left iphone-second iphone-left-second" />
                        <div className="device-content-container rotate-left device-content-container-left-second device-content-container-second">
                            <div className="container">

                            </div>
                        </div>
                    </div>
                    <div className="device">
                        <IphoneX className="device IphoneX rotate-left iphone-third iphone-left-third" />
                        <div className="device-content-container rotate-left device-content-container-left-third device-content-container-third">
                            <div className="container">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>

)

export default Home
