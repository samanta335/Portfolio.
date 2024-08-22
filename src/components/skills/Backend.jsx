import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">Backend </h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Express.js</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">MongoDb</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Cors</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Enviroment Variable</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Backend;