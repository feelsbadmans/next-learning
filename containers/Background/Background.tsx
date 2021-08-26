import React from "react";
import Image from "next/image";
import bgImage from "../../assets/images/background.jpg";

const Background: React.FC = ({ children }) => {
    return (
        <div className="container flex-center column">
            <Image alt="mountains-lake" src={bgImage} layout="fill" objectFit="cover" loading="eager" />
            {children}
        </div>
    );
};

export default Background;
