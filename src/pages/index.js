import React from "react"

import Layout from '../components/layout';

import IphoneX from '../assets/img/iphonex.inline.svg'

const Home = () => (
    <Layout>
        <div className="Landing">
            <div className="Header">
                <div className="Header-Text-Container">
                    <div className="Title">
                        The new wave in social media
                    </div>
                    <div className="SubTitle">
                        Wave helps people connect: without ads, like buttons, or distractions
                    </div>
                </div>
                <div className="Iphone-Background">
                    <IphoneX className="IphoneX rotate-right iphone-first iphone-right-first" />
                    <IphoneX className="IphoneX rotate-right iphone-second iphone-right-second" />
                    <IphoneX className="IphoneX rotate-right iphone-third iphone-right-third" />
                    <IphoneX className="IphoneX rotate-left iphone-first iphone-left-first" />
                    <IphoneX className="IphoneX rotate-left iphone-second iphone-left-second" />
                    <IphoneX className="IphoneX rotate-left iphone-third iphone-left-third" />
                </div>
            </div>
        </div>
    </Layout>

)

export default Home
