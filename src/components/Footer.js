
import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="coincap">
                    <div>
                        <div className="heads">COINCAP.IO</div>
                        <div className="item"> Methodology</div>
                        <div className="item"> Support</div>
                        <div className="item"> Our API</div>
                        <div className="item"> Rate Comparision</div>
                        <div className="item"> Careers</div>

                        <div className="display-sm mt-5">
                            <div className="heads ">FOLLOW US</div>
                            <div> <FacebookIcon  className="mr-1" size="20"/> <TwitterIcon  size="20"/></div>
                        </div>

                    </div>


                </div>


                <div className="coincap">
                    <div  className="mh-5">
                        <div className="heads"> LEGALS</div>
                        <div className="item"> Terms of Service</div>
                        <div className="item"> Privacy Policy</div>
                        <div>

                            <div className="heads">DISCLAIMER</div>
                            <div className="item "> Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</div>
                        </div>

                        <div className="display-sm">
                            <div className="heads">COINCAP APP AVAILABLE ON</div>

                            <div> <img src="https://coincap.io/static/images/stores/google_play.svg" className="mb-1" /></div>
                            <div> <img src="https://coincap.io/static/images/stores/apple_store.svg" /></div>
                        </div>

                    </div>
                </div>
                <div className="coincap" id="diss">
                    <div >
                        <div className="heads" >FOLLOW US</div>
                        <div > <FacebookIcon className="mr-2" size="20" /> <TwitterIcon size="20" /></div>
                    </div>
                </div>

                <div className="coincap" id="dis">
                    <div  >
                        <div className="heads">COINCAP APP AVAILABLE ON</div>

                        <div> <img src="https://coincap.io/static/images/stores/google_play.svg" /></div>
                        <div> <img src="https://coincap.io/static/images/stores/apple_store.svg" /></div>
                    </div>
                </div>
            </div>

        </footer>

    )
}
export default Footer;