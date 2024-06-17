import React from "react";


const Card = ({ Name, Img }) => {
    return (
        <>
            <div className="sm:w-4/12 md:w-3/12 px-2">
                <div className="card px-3 pt-10 py-6">
                    <span className="icon mx-auto">
                        {Img}
                    </span>
                    <h2 className="text-white text-xl capitalize">{Name}</h2>
                    <div className="shine"></div>
                    <div className="background">
                        <div className="tiles">
                            <div className="tile tile-1"></div>
                            <div className="tile tile-2"></div>
                            <div className="tile tile-3"></div>
                            <div className="tile tile-4"></div>

                            <div className="tile tile-5"></div>
                            <div className="tile tile-6"></div>
                            <div className="tile tile-7"></div>
                            <div className="tile tile-8"></div>

                            <div className="tile tile-9"></div>
                            <div className="tile tile-10"></div>
                        </div>

                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Card;