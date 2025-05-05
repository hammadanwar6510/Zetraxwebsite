import React from 'react'
import './securitytools.scss'

const Securitytools = () => {
    return (
        <>
            <div className="securitytoolsprnt">
                <img className='img-fluid  shadowimg' src="\assets\shadow.png" alt="" />
                <div className="custum-container">
                    <div className="chldsecuritytools">
                        <div className="cntsecuritytools">
                            <h2>
                                ZetraX Security Tools
                            </h2>
                            <p>ZetraX Security Tools (Legacy Suite) brings back trusted tools under the ZetraX brand, offering essential, non-quantum security for today’s digital threats.</p>
                        </div>
                        <div className="cardsecuritytools">
                            <div className="securitycardchld">

                                <div className="firstcard">
                                    <svg className='svgcard1' xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                        <path d="M26.75 26.2502L21.325 20.8252" stroke="#0571FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.25 23.75C19.7728 23.75 24.25 19.2728 24.25 13.75C24.25 8.22715 19.7728 3.75 14.25 3.75C8.72715 3.75 4.25 8.22715 4.25 13.75C4.25 19.2728 8.72715 23.75 14.25 23.75Z" stroke="#0571FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h3>Token Scanner</h3>
                                    <p>Detects risks like rug pulls, honeypots, and high taxes by analyzing token contracts, helping users avoid scams and make safer trading decisions.</p>
                                    <button>Explore Tool</button>
                                </div>
                                <div className="firstcard">
                                    <svg className='svgcard1' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M21.25 17.5H21.2625" stroke="#0571FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.75 8.75H23.75C24.413 8.75 25.0489 9.01339 25.5178 9.48223C25.9866 9.95107 26.25 10.587 26.25 11.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75" stroke="#0571FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h3>Wallet Inspector</h3>
                                    <p>Scans for risky approvals and flags blacklisted addresses, helping users spot and avoid potential threats in their wallet activity.</p>
                                    <button>Explore Tool</button>
                                </div>
                            </div>
                            <div className="securitycardchldsec">
                                <div className="firstcard">
                                    <svg className='svgcard1' xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                        <path d="M9.25 20.375C12 20.375 14.25 18.0875 14.25 15.3125C14.25 13.8625 13.5375 12.4875 12.1125 11.325C10.6875 10.1625 9.6125 8.4375 9.25 6.625C8.8875 8.4375 7.825 10.175 6.3875 11.325C4.95 12.475 4.25 13.875 4.25 15.3125C4.25 18.0875 6.5 20.375 9.25 20.375Z" stroke="#0571FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.2 8.2499C17.0597 6.87631 17.6692 5.36121 18 3.7749C18.625 6.8999 20.5 9.8999 23 11.8999C25.5 13.8999 26.75 16.2749 26.75 18.7749C26.7572 20.5028 26.2511 22.1938 25.296 23.6338C24.3409 25.0737 22.9798 26.1976 21.3852 26.863C19.7906 27.5284 18.0343 27.7054 16.339 27.3715C14.6437 27.0376 13.0857 26.2078 11.8625 24.9874" fill="#0571FE" fill-opacity="0.04" />
                                        <path d="M16.2 8.2499C17.0597 6.87631 17.6692 5.36121 18 3.7749C18.625 6.8999 20.5 9.8999 23 11.8999C25.5 13.8999 26.75 16.2749 26.75 18.7749C26.7572 20.5028 26.2511 22.1938 25.296 23.6338C24.3409 25.0737 22.9798 26.1976 21.3852 26.863C19.7906 27.5284 18.0343 27.7054 16.339 27.3715C14.6437 27.0376 13.0857 26.2078 11.8625 24.9874" stroke="#0571FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h3>Liquidity Tracker</h3>
                                    <p>Provides insights into liquidity pool (LP) lock and unlock events, helping users monitor fund security and detect potential rug pulls.</p>
                                    <button>Explore Tool</button>
                                </div>
                                <div className="firstcard">
                                    <svg className='svgcard1' xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                        <path d="M12.6667 13.75C15.4282 13.75 17.6667 11.5114 17.6667 8.75C17.6667 5.98858 15.4282 3.75 12.6667 3.75C9.90532 3.75 7.66675 5.98858 7.66675 8.75C7.66675 11.5114 9.90532 13.75 12.6667 13.75Z" stroke="#0571FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0417 18.75H8.91675C7.59067 18.75 6.3189 19.2768 5.38121 20.2145C4.44353 21.1521 3.91675 22.4239 3.91675 23.75V26.25" stroke="#0571FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.4167 25C23.4878 25 25.1667 23.3211 25.1667 21.25C25.1667 19.1789 23.4878 17.5 21.4167 17.5C19.3457 17.5 17.6667 19.1789 17.6667 21.25C17.6667 23.3211 19.3457 25 21.4167 25Z" stroke="#0571FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M26.4167 26.25L24.0417 23.875" stroke="#0571FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h3>Holder Analyzer</h3>
                                    <p>Tracks whale movements and mint activity, giving insights into large transactions and token distribution trends.</p>
                                    <button>Explore Tool</button>
                                </div>
                                <div className="firstcard">
                                    <svg className='svgcard1' xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                        <path d="M13.3335 16.25C13.8703 16.9676 14.5552 17.5614 15.3417 17.9911C16.1282 18.4208 16.9979 18.6764 17.8918 18.7404C18.7857 18.8044 19.683 18.6754 20.5227 18.3622C21.3624 18.049 22.1249 17.5588 22.7585 16.925L26.5085 13.175C27.647 11.9962 28.2769 10.4174 28.2627 8.7787C28.2485 7.13997 27.5912 5.57239 26.4324 4.41359C25.2736 3.25479 23.706 2.59748 22.0673 2.58324C20.4285 2.569 18.8498 3.19897 17.671 4.33746L15.521 6.47496" stroke="#0571FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.3335 13.75C17.7967 13.0324 17.1118 12.4386 16.3253 12.0089C15.5388 11.5792 14.6691 11.3236 13.7752 11.2596C12.8813 11.1956 11.984 11.3246 11.1443 11.6378C10.3046 11.951 9.54211 12.4412 8.9085 13.075L5.1585 16.825C4.02001 18.0038 3.39005 19.5826 3.40429 21.2213C3.41853 22.86 4.07583 24.4276 5.23464 25.5864C6.39344 26.7452 7.96101 27.4025 9.59974 27.4167C11.2385 27.431 12.8172 26.801 13.996 25.6625L16.1335 23.525" stroke="#0571FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h3>Contract Checker</h3>
                                    <p>Uses AI to detect code anomalies in smart contracts, helping identify bugs, risks, or suspicious patterns before deployment.</p>
                                    <button>Explore Tool</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Securitytools