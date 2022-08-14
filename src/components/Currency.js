import React from "react";
import "./Currency.css"
import { CaretUpFill } from 'react-bootstrap-icons';


function getNumberFormat(number) {
    const abbrev = ['', 'K', 'M', 'B', 'T'];
    const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3)
    const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length - 1))
    const suffix = abbrev[order];

    return (number / Math.pow(10, order * 3)).toFixed(2) + suffix;
}

const Currency = ({ data = [] }) => {



    return (
        <div className="ss">

            {/* theads-------------------------->>>>>>>>>>... */}

            <div className="x pt-2 pb-2" id="x">
                <div className=" y">
                    <div className="ml-4 rank" >Rank <CaretUpFill className="align-self-center" height={"10px"} /></div>
                    <div className="a">Name </div>

                </div>
                <div className="z">
                    <div className="price">Price</div>
                    <div className="market">MarketCap</div>
                    <div className="vwap">VWAP(24Hr)</div>
                    <div className="supply">Supply</div>
                    <div className="value">Value(24Hr)</div>
                    <div className=" changes"><span>Change</span>(24Hr)</div>

                </div>
            </div>

            {/* tdata----------->>>>>>>>>>> */}


            {data?.map((item, index) => (
                <div className="x pt-2 pb-2" key={item.symbol}>
                    <div className=" y">
                        <div className="ml-4 rank">{index}</div>
                        <div className="a ">
                            <div className=" name">
                                <img src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}%402x.png`} height={"30px"} width={"30px"} />
                            </div>
                            <div className="name">{item.name}<br /><div className="subname">{item.symbol}</div></div>
                        </div>

                    </div>
                    <div className="z ">
                        <div className="price" style={{ textAlign: "right" }}>${`${parseFloat(item?.priceUsd).toFixed(2)}`}</div>
                        <div className="market">${getNumberFormat(item.marketCapUsd)}</div>
                        <div className="vwap">${`${parseFloat(item?.vwap24Hr).toFixed(2)}`}</div>
                        <div className="supply">{getNumberFormat(item.supply)}</div>
                        <div className="value"> {getNumberFormat(item.volumeUsd24Hr)}</div>
                        <div className=" changes" style={{ color: item?.changePercent24Hr > 0 ? "green" : "red" }}> {`${parseFloat(item?.changePercent24Hr).toFixed(2)}`}%</div>

                    </div>
                </div>))}

            

        </div>

    )
}
export default Currency;