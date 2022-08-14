import React from "react";
import './Header.css'

const Header = () => {
    return (
        <div className="head">
            <div className="headings">
                <div className="block">
                    <div className="mt-2 h6">
                        MARKET CAP<br />
                        <span className="h4"> $1.23T</span>

                    </div>
                    <div className="mt-2 h6">
                        EXCHANGE VOL<br />
                        <span className="h4">  $60.64B</span>

                    </div>

                </div>

                <div className="block">
                    <div className="mt-2 h6">
                        ASSETS<br />
                        <span className="h4">2,295</span>

                    </div>
                    <div className="mt-2 h6">
                        EXCHANGES<br />

                        <span className="h4">73</span>

                    </div>
                </div>
                <div className="block">
                    <div className="mt-2 h6">
                        MARKETS<br />
                        <span className="h4"> 13,331</span>

                    </div>
                    <div className="mt-2 h6">
                        BTC DOM INDEX<br />
                        <span className="h4"> 37.3%</span>

                    </div>

                </div>


            </div>
        </div >
    )
}
export default Header;