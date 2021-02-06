import React from 'react';
import '../css/footer.css';
import Logo from '../theIQkids.png';
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row footer-row">
                    <div className="col-md-6 col-lg-3 col-xl-3">
                        <h3 className="footer-block-title">Get in touch</h3>
                        <h6 className="mail-id">mykidsdrawing@gmail.com</h6>
                        <h6 className="contact-no">+91 9380183066</h6>
                        <h6 className="address">Hebbal, Bengaluru</h6>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3">
                        <h3 className="footer-block-title">Information</h3>
                        <ol className="list-unstyled">
                            <a href="javascript:void(0)" ><li className="footer-links">Workshop</li></a>
                            <a href="javascript:void(0)" ><li className="footer-links">Playlist</li></a>
                            <a href="javascript:void(0)" ><li className="footer-links">Terms &amp; Conditions</li></a>
                            <a href="javascript:void(0)" ><li className="footer-links">FAQs</li></a>
                        </ol>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3">
                        <h3 className="footer-block-title">Information</h3>
                        <ol className="list-unstyled social-list">
                            {/* <li className="social-links"><a href="https://www.youtube.com/channel/UCwfU_k15IyKhvt9G8IALkCw" className="text-decoration-none fb-icon"></a></li> */}
                            <a href="javascript:void(0)" >
                                <li className="social-links">
                                    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.8581V3.72977C20 3.72977 20 0.293945 16.5534 0.293945H3.44544C3.44544 0.293945 0 0.293945 0 3.72977V10.8581C0 10.8581 0 14.2939 3.44544 14.2939H16.5534C16.5534 14.2939 20 14.2939 20 10.8581ZM13.8829 7.30391L7.33537 11.1371V3.46953L13.8829 7.30391Z" fill="#FF0000"/>
                                    </svg>
                                </li>
                            </a>
                            <a href="javascript:void(0)" >
                                <li className="social-links">
                                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66767 16.2939V8.97699H0V6.17816H2.66831V4.06571C2.66831 1.63339 4.25605 0.293945 6.60553 0.293945C7.73045 0.293945 8.71781 0.367248 9 0.400568V2.97949H7.32869C6.05078 2.97949 5.81166 3.53926 5.81166 4.36558V6.17816H8.86951L8.47225 8.97699H5.81166V16.2939H2.66188H2.66767Z" fill="#4267B2"/>
                                    </svg>
                                </li>
                            </a>
                            <a href="javascript:void(0)" >
                                <li className="social-links">
                                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2.27597C13.9371 2.27597 14.285 2.28715 15.4449 2.34007C16.5174 2.38901 17.0998 2.56821 17.4875 2.71881C18.0009 2.91836 18.3674 3.15677 18.7523 3.54167C19.1372 3.92658 19.3756 4.29305 19.5751 4.80646C19.7257 5.19411 19.9049 5.77656 19.9539 6.849C20.0068 8.00895 20.018 8.35683 20.018 11.294C20.018 14.2311 20.0068 14.579 19.9539 15.7389C19.9049 16.8114 19.7257 17.3938 19.5751 17.7815C19.3756 18.2949 19.1372 18.6614 18.7523 19.0463C18.3674 19.4312 18.0009 19.6696 17.4875 19.8691C17.0998 20.0197 16.5174 20.1989 15.4449 20.2479C14.2852 20.3008 13.9373 20.312 11 20.312C8.06266 20.312 7.71479 20.3008 6.55506 20.2479C5.48257 20.1989 4.90013 20.0197 4.51252 19.8691C3.99906 19.6696 3.63259 19.4312 3.24768 19.0463C2.86278 18.6614 2.62437 18.2949 2.42487 17.7815C2.27423 17.3938 2.09503 16.8114 2.04608 15.7389C1.99316 14.579 1.98198 14.2311 1.98198 11.294C1.98198 8.35683 1.99316 8.00895 2.04608 6.84904C2.09503 5.77656 2.27423 5.19411 2.42487 4.80646C2.62437 4.29305 2.86278 3.92658 3.24768 3.54167C3.63259 3.15677 3.99906 2.91836 4.51252 2.71881C4.90013 2.56821 5.48257 2.38901 6.55501 2.34007C7.71496 2.28715 8.06284 2.27597 11 2.27597ZM11 0.293945C8.01254 0.293945 7.63798 0.306608 6.46471 0.360141C5.29385 0.413586 4.49426 0.59951 3.79454 0.871453C3.07119 1.15257 2.45775 1.52869 1.84623 2.14021C1.2347 2.75174 0.858576 3.36518 0.577464 4.08853C0.305521 4.78825 0.119597 5.58784 0.0661518 6.7587C0.0126191 7.93193 0 8.30652 0 11.294C0 14.2814 0.0126191 14.656 0.0661518 15.8292C0.119597 17.0001 0.305521 17.7997 0.577464 18.4994C0.858576 19.2227 1.2347 19.8362 1.84623 20.4477C2.45775 21.0592 3.07119 21.4354 3.79454 21.7165C4.49426 21.9884 5.29385 22.1743 6.46471 22.2278C7.63798 22.2813 8.01254 22.2939 11 22.2939C13.9874 22.2939 14.362 22.2813 15.5352 22.2278C16.7061 22.1743 17.5057 21.9884 18.2054 21.7165C18.9288 21.4354 19.5422 21.0592 20.1537 20.4477C20.7653 19.8362 21.1414 19.2228 21.4225 18.4994C21.6944 17.7997 21.8804 17.0001 21.9338 15.8292C21.9873 14.656 22 14.2814 22 11.294C22 8.30652 21.9873 7.93193 21.9338 6.7587C21.8804 5.58784 21.6944 4.78825 21.4225 4.08853C21.1414 3.36518 20.7653 2.75174 20.1537 2.14021C19.5422 1.52869 18.9288 1.15257 18.2054 0.871453C17.5057 0.59951 16.7061 0.413586 15.5352 0.360141C14.362 0.306608 13.9874 0.293945 11 0.293945ZM11.0218 5.66299C7.8999 5.66299 5.36905 8.19384 5.36905 11.3158C5.36905 14.4377 7.8999 16.9685 11.0218 16.9685C14.1438 16.9685 16.6746 14.4377 16.6746 11.3158C16.6746 8.19384 14.1438 5.66299 11.0218 5.66299ZM11.0218 14.9851C8.99532 14.9851 7.35247 13.3423 7.35247 11.3158C7.35247 9.28927 8.99532 7.64641 11.0218 7.64641C13.0483 7.64641 14.6912 9.28927 14.6912 11.3158C14.6912 13.3423 13.0483 14.9851 11.0218 14.9851ZM18.1587 5.40107C18.1587 6.1243 17.5725 6.71061 16.8492 6.71061C16.126 6.71061 15.5397 6.1243 15.5397 5.40107C15.5397 4.67783 16.126 4.09156 16.8492 4.09156C17.5725 4.09156 18.1587 4.67783 18.1587 5.40107Z" fill="#E1306C"/>
                                    </svg>

                                </li>
                            </a>
                        </ol>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 footer-logo-col">
                         <div className="logo"><img src={Logo} alt=""/></div>
                         <div className="copywright">
                            Copyrights 2020 | All rights reserved
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
        // <footer>
        //      <div class="container">
        //     <div class="row footer-row">
        //         <div class="col-md-6 col-lg-3 col-xl-3">
                    // <h3 class="footer-block-title">Get in touch</h3>
                    // <h6 class="mail-id">mykidsdrawing@gmail.com</h6>
                    // <h6 class="contact-no">+91 9380183066</h6>
                    // <h6 class="address">Hebbal, Bengaluru</h6>
        //         </div>
        //         <div class="col-md-6 col-lg-3 col-xl-3">
        //             <h3 class="footer-block-title">Information</h3>
                    // <ol class="list-unstyled">
                    //     <a href="javascript:void(0)" onclick="checkAndRedirect('/active-classes.html')"><li class="footer-links">Workshop</li></a>
                    //     <a href="javascript:void(0)" onclick="checkAndRedirect('/academy/playlist.html')"><li class="footer-links">Playlist</li></a>
                    //     <a href="javascript:void(0)" onclick="checkAndRedirect('/terms-conditions.html')"><li class="footer-links">Terms &amp; Conditions</li></a>
                    //     <a href="javascript:void(0)" onclick="checkAndRedirect('/faq.html')"><li class="footer-links">FAQs</li></a>
                    // </ol>
        //         </div>
        //         <div class="col-md-6 col-lg-3 col-xl-3">
        //             <h3 class="footer-block-title">Follow Us</h3>
                    // <ol class="list-unstyled social-list">
                    //     <li class="social-links"><a href="https://www.youtube.com/channel/UCwfU_k15IyKhvt9G8IALkCw" class="text-decoration-none fb-icon"><img src="./images/ytube.svg" alt=""></a></li>
                    //     <li class="social-links"><a href="https://www.facebook.com/mykidsdrawing/" class="text-decoration-none"><img src="./images/fb.svg" alt=""></a></li>
                    //     <li class="social-links"><a href="https://www.instagram.com/mykidsdrawing.in/" class="text-decoration-none"><img src="./images/insta.svg" alt=""></a></li>
                    // </ol>
        //         </div>
                // <div class="col-md-6 col-lg-3 col-xl-3 footer-logo-col">
                //     <div class="logo"><img src="./images/logo.svg" alt=""></div>
                    // <div class="copywright">
                    //     Copyrights 2020 | All rights reserved
                    // </div>
                // </div>
        //     </div>
        // </div>
        // </footer>
    )
}
