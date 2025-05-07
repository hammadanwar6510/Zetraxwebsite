import React from 'react'
import './getstarted.scss'
const Getstarted = () => {
    return (
        <>
            <div className="getstartedmain">
                <div className="custum-container">
                    <div className="cntgetstarted">
                        <div className="chlcnt">
                            <h2>Get Started</h2>
                            <p>Step into the quantum-secure Web3 future.</p>
                        </div>
                        <div className="buttonsgetstarted">
                            {/* <button className='buttononegetstarted'>Launch App <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <g clip-path="url(#clip0_189_160)">
                                    <path d="M10.6338 5L13 7.33333L10.6338 9.66667" stroke="white" stroke-linecap="square" />
                                    <path d="M1 7.3335H12.1549" stroke="white" stroke-linecap="square" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_189_160">
                                        <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></button> */}
                            <button className="animated-button buttonnav4">
                                <div className="btn-flip" data-back="Est labore molestiae ex quos perspi sit commodi" data-front="Est labore molestiae ex quos perspi sit commodi">
                                    <div className="front"> Launch App
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <g clip-path="url(#clip0_189_160)">
                                                <path d="M10.6338 5L13 7.33333L10.6338 9.66667" stroke="white" stroke-linecap="square" />
                                                <path d="M1 7.3335H12.1549" stroke="white" stroke-linecap="square" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_189_160">
                                                    <rect width="14" height="14" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg></div>
                                    <div className="back"> Launch App
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <g clip-path="url(#clip0_189_160)">
                                                <path d="M10.6338 5L13 7.33333L10.6338 9.66667" stroke="white" stroke-linecap="square" />
                                                <path d="M1 7.3335H12.1549" stroke="white" stroke-linecap="square" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_189_160">
                                                    <rect width="14" height="14" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg></div>
                                </div>
                            </button>




                            <button className="animated-button buttonnav">
                                <div className="btn-flip" data-back="Est labore molestiae ex quos perspi sit commodi" data-front="Est labore molestiae ex quos perspi sit commodi">
                                    <div className="front"> Join Community
                                     </div>
                                    <div className="back">Join Community
                                       </div>
                                </div>
                            </button>

                            <button className="animated-button buttonnav2">
                                <div className="btn-flip" data-back="Est labore molestiae ex quos perspi sit commodi" data-front="Est labore molestiae ex quos perspi sit commodi">
                                    <div className="front">Docs
                                     </div>
                                    <div className="back">Docs
                                       </div>
                                </div>
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Getstarted