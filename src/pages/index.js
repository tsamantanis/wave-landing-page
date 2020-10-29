import React, { useState } from "react"
import Layout from '../components/Layout';

import IphoneX from '../assets/img/iphonex.inline.svg'
import iphoneX from '../assets/img/iphonex.svg'
import WaveConnectsYou from '../assets/img/WaveConnectsYou.inline.svg'
import AdFreeExperience from '../assets/img/AdFreeExperience.inline.svg'
import profile from '../assets/img/Profile.jpg'
import home from '../assets/img/Home.jpg'
import camera from '../assets/img/Camera.jpg'
import message from '../assets/img/Message.jpg'
import onboarding_1 from '../assets/img/Onboarding_1.jpg'
import onboarding_3 from '../assets/img/Onboarding_3.jpg'

const Home = () => {
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
                <div className="WantToGetEarlyAccess" id="WantToGetEarlyAccess">
                    <h3>Want to get early access and product updates?</h3>
                    <form name="EarlyAccess" method="post" action="/success" data-netlify="true" Content-Type="application/x-www-form-urlencoded">
                        <label htmlFor="email-input-hidden" type="hidden" />
                        <input id="email-input-hidden" type="hidden" name="form-name" value="EarlyAccess" />
                        <label htmlFor="email">
                            <input
                                id="email-input"
                                type="email"
                                name="email"
                                defaultValue=""
                                requred
                            />
                            <span>Your email</span>
                        </label>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="WaveInfo WaveRespectsYou bg-primary-desat align-items-center">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-3 offset-md-1">
                            <div className="device device-iphonex">
                                <img src={home} className="device-screen" alt="Home Screen" />
                                <img src={iphoneX} className="img-fluid" alt="Phone Frame" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 offset-md-2 offset-lg-2">
                            <h2 className="text-primary mb-5">Respecting privacy</h2>
                            <p>At Wave, we understand that your data is strictly yours. That is why our app does not track you or your activity, and will never sell your information. Wave has been created to provide you content you choose to see, and that is all we are going to do.</p>
                        </div>
                    </div>
                </div>
                <div className="WaveInfo">
                    <div className="WaveRespectsYou row d-flex align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-12 col-md-9 offset-md-2">
                                    <h2 className="text-primary mb-5">Choose what you see</h2>
                                    <p>Not all posts have the same priority. There are things you are more excited to see and we created a way for you to do that. With Wave, you can organize your connections in different groups so that you always see the most important content first.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="device align-items-center justify-content-center">
                                <div className="container ChooseWhatYouSeeIllustration">
                                    {/*<ChooseWhatYouSeeIllustration />*/}
                                    <div className="row">
                                        <div className="col-12 col-md-9 offset-md-3">
                                            <div className="row">
                                                <div className="col-4 text-right">
                                                    <div className="card skewed bg-secondary-desat">
                                                        <div className="row unskewed justify-content-center align-items-center">
                                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width="40px" height="40px">
                                                                <title>Star</title>
                                                                <path fill="#2968F6" d='M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z'/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="card skewed">
                                                        <div className="row unskewed justify-content-center align-items-center">
                                                            Close Friends
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-9 offset-md-2">
                                            <div className="row">
                                                <div className="col-4 text-right">
                                                    <div className="card skewed">
                                                        <div className="row unskewed justify-content-center align-items-center">
                                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width="40px" height="40px">
                                                                <title>People</title>
                                                                <path fill="#2968F6" d='M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zM467.83 432H204.18a27.71 27.71 0 01-22-10.67 30.22 30.22 0 01-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 01-5.32 25.78A27.68 27.68 0 01467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zM212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 004.79 23.36A25.32 25.32 0 0041.72 400h111a8 8 0 007.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 00-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z'/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="card skewed bg-secondary-desat">
                                                        <div className="row unskewed justify-content-center align-items-center">
                                                            Friends
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-9 offset-1">
                                            <div className="row">
                                                <div className="col-4 text-right">
                                                    <div className="card skewed bg-secondary-desat">
                                                        <div className="row unskewed justify-content-center align-items-center">
                                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width="40px" height="40px">
                                                                <title>Eye</title>
                                                                <circle fill="#2968F6" cx='256' cy='256' r='64'/>
                                                                <path fill="#2968F6" d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="card skewed">
                                                        <div className="row unskewed justify-content-center align-items-center">
                                                            Acquatances
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-9">
                                            <div className="row">
                                                <div className="col-4 text-right">
                                                    <div className="card skewed">
                                                        <div className="row unskewed justify-content-center align-items-center">
                                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width="40px" height="40px">
                                                                <title>Earth</title>
                                                                <path fill="#2968F6" d='M414.39 97.74A224 224 0 1097.61 414.52 224 224 0 10414.39 97.74zM64 256.13a191.63 191.63 0 016.7-50.31c7.34 15.8 18 29.45 25.25 45.66 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.21-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.08 8.72 21.52 10.08 33.36a305.36 305.36 0 007.45 41.27c0 .1 0 .21.08.31C117.8 411.13 64 339.8 64 256.13zm192 192a193.12 193.12 0 01-32-2.68c.11-2.71.16-5.24.43-7 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.68 34.11-33 8.78-13 11.41-30.5 7.79-45.69-5.33-22.44-35.82-29.93-52.26-42.1-9.45-7-17.86-17.82-30.27-18.7-5.72-.4-10.51.83-16.18-.63-5.2-1.35-9.28-4.15-14.82-3.42-10.35 1.36-16.88 12.42-28 10.92-10.55-1.41-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.68 5.78 2.14 8.51 7.8 13.7 10.66 9.73 5.34 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.21 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.06 10-21.46 1.65-3.45 0-8.24-2.78-12.75q5.41-2.28 11-4.23a15.6 15.6 0 008 3c6.69.44 13-3.18 18.84 1.38 6.48 5 11.15 11.32 19.75 12.88 8.32 1.51 17.13-3.34 19.19-11.86 1.25-5.18 0-10.65-1.2-16a190.83 190.83 0 01105 32.21c-2-.76-4.39-.67-7.34.7-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22 8.5 0 17.11-3.8 14.37-13.62-1.19-4.26-2.81-8.69-5.42-11.37a193.27 193.27 0 0118 14.14c-.09.09-.18.17-.27.27-5.76 6-12.45 10.75-16.39 18.05-2.78 5.14-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.4 3.74 23.51 8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0110.82 4.41c3.8 3.94 3.05 7.62 3.86 12.54 1.43 8.74 9.14 4 13.83-.41a192.12 192.12 0 019.24 18.77c-5.16 7.43-9.26 15.53-21.67 6.87-7.43-5.19-12-12.72-21.33-15.06-8.15-2-16.5.08-24.55 1.47-9.15 1.59-20 2.29-26.94 9.22-6.71 6.68-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.81 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21a158 158 0 004.74 30.07A191.75 191.75 0 01256 448.13z'/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="card skewed bg-secondary-desat">
                                                        <div className="row unskewed justify-content-center align-items-center">
                                                            Public
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WaveInfo WaveConnectsPeople bg-secondary-desat">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-8">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 text-center">
                                    <h2 className="text-primary mb-5">Genuine connection</h2>
                                    <p>Wave is a safe place for you to see how your friends are doing and connect, not a popularity contest. There are no like buttons and your number of connections will not be displayed to you or others. Instead, Wave offers you the option to send private comments to help you start a conversation of a post!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-10 text-center">
                            <WaveConnectsYou />
                            <a href="https://stories.freepik.com/work">Illustration by Freepik Stories</a>
                        </div>
                    </div>
                </div>
                <div className="WaveInfo AdFreeExperience">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="device align-items-center justify-content-center">
                                <div className="AdFreeExperienceIllustration text-center">
                                    <AdFreeExperience />
                                    <br />
                                    <a href="https://stories.freepik.com/technology">Illustration by Freepik Stories</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-12 col-md-9 offset-md-2">
                                    <h2 className="text-primary mb-5">Ad free experience</h2>
                                    <p>One thing we can all agree on is that sponsored content is the worst. That is why Wave has no sponsored content what-so-ever. We wanted to develop an environment where people can see exactly what the choose to, without distractions or ads. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ReadyToGetStarted bg-primary-desat" id="ReadyToGetStarted">
                    <h3>Ready to start sharing?</h3>
                    <a href="#WantToGetEarlyAccess">Get Started</a>
                </div>
            </div>
            <div className="Landing-Mobile">
                <section>
                    <div className="row justify-content-center align-items-center pt-4 mb-5">
                        <div className="col-10 bg-secondary-desat text-center rounded pt-5 pb-5">
                            <h1 className="text-primary mt-5">
                                The new wave in social media
                            </h1>
                            <p className="lead lh-0.75">
                                Wave helps people connect: without ads, like buttons, or distractions.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Home
