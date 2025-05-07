import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
const Footer = () => {
    return (
        <>
            <section className="main-footer ">
                <div className="custum-container">
                    <div className="footechlmain">
                        <div className="leftcntfooter">
                            <img className='img-fluid' src="\assets\logo.svg" alt="" />
                            <p>Advanced security tools for your Web3 assets. Protecting your digital future.</p>
                            <div className="socailiconsfooter">
                                <a href="#">< img className='img-fluid' src="\assets\youtubefooter.svg" alt="" /></a>
                                <a href="#">< img className='img-fluid' src="\assets\xfooter.svg" alt="" /></a>
                                <a href="#">< img className='img-fluid' src="\assets\discordfooter.svg" alt="" /></a>
                                <a href="#">< img className='img-fluid' src="\assets\Frame 56.svg" alt="" /></a>
                                <a href="#">< img className='img-fluid' src="\assets\gitfooter.svg" alt="" /></a>
                                <a href="#">< img className='img-fluid' src="\assets\teligramfooter.svg" alt="" /></a>
                            </div>
                        </div>
                        <div className="rightcntfooter">
                            <div className="listitemchldfooter">

                                <p>Products</p>
                                <ul>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Scanner</a></li>
                                    <li><a href="#">Dashboard</a></li>
                                    <li><a href="#">Mobile App</a></li>
                                    <li><a href="#">Token</a></li>
                                    <li><a href="#">ZetraX GPT</a></li>
                                </ul>
                            </div>
                            <div className="listitemchldfooter">

                                <p>Resources</p>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Legal</a></li>
                                </ul>
                            </div>
                            <div className="listitemchldfooter">

                                <p>Connect</p>
                                <ul>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Legal</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
<div className="footer-policy">
    <h3>©2025 Zetraxai. All rights reserved.</h3>
    <div className="termsfooter">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
    </div>
</div>

        </>
    )
}

export default Footer;
