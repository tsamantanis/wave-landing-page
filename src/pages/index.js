import React, { useState } from "react"

import Layout from '../components/layout';

import IphoneX from '../assets/img/iphonex.inline.svg'
import profile from '../assets/img/Profile.jpg'
import home from '../assets/img/Home.jpg'
import camera from '../assets/img/Camera.jpg'
import message from '../assets/img/Message.jpg'
import onboarding_1 from '../assets/img/Onboarding_1.jpg'
import onboarding_3 from '../assets/img/Onboarding_3.jpg'
import ChooseWhatYouSeeIllustration from '../assets/img/chooseWhatYouSeeIllustration.inline.svg';

const Home = () => {
    const [email, setEmail] = useState('');

    return (
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
                                    <img src={message} alt="Wave App Message Page"/>
                                </div>
                            </div>
                        </div>
                        <div className="device">
                            <IphoneX className="device IphoneX rotate-right iphone-third iphone-right-third" />
                            <div className="device-content-container rotate-right device-content-container-right-third device-content-container-third">
                                <div className="container">
                                    <img src={onboarding_1} alt="Wave App Onboarding Page 1"/>
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
                                    <img className="device-img-full" src={camera} alt="Wave App Camera Page"/>
                                </div>
                            </div>
                        </div>
                        <div className="device">
                            <IphoneX className="device IphoneX rotate-left iphone-third iphone-left-third" />
                            <div className="device-content-container rotate-left device-content-container-left-third device-content-container-third">
                                <div className="container">
                                    <img src={onboarding_3} alt="Wave App Onboarding Page 3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WantToGetEarlyAccess">
                    <h3>Want to get early access and product updates?</h3>
                    <label>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span>Your email</span>
                    </label>
                    <button>Sign Up</button>
                </div>
                <div className="WaveInfo bg-primary-desat">
                    <div className="WaveRespectsYou row d-flex align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="device align-items-center">
                                <IphoneX className="IphoneX"/>
                                <div className="device-content-container">
                                    <div className="container overflow-hidden">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-12 col-md-10">
                                    <h2 className="text-primary mb-5">Respecting privacy</h2>
                                    <p>At Wave, we understand that your data is strictly yours. That is why our app does not track you or your activity, and will never sell any of your information. Wave has been created to provide you content you choose to see, and that is all we are going to do.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WaveInfo">
                    <div className="WaveRespectsYou row d-flex align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-12 col-md-10 offset-md-2">
                                    <h2 className="text-primary mb-5">Choose what you see</h2>
                                    <p>Not all posts have the same priority. There are things you are more excited to see and we created a way for you to do that. With Wave, you can organize your connections in different groups so that you always see the most important content on top.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="device align-items-center justify-content-center">
                                <div className="ChooseWhatYouSeeIllustration">
                                    <ChooseWhatYouSeeIllustration />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WaveInfo">
                    <div className="WaveRespectsYou row d-flex align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-12 col-md-10 offset-md-2">
                                    <h2 className="text-primary mb-5">Ad free experience</h2>
                                    <p>One thing we can all agree on is that sponsored content is the worst. That is why Wave has no sponsored content what-so-ever. We wanted to develop an envirnment where people can see exactly what the choose to, without distractions or ads. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="device align-items-center justify-content-center">
                                <div className="ChooseWhatYouSeeIllustration">
                                    <ChooseWhatYouSeeIllustration />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
