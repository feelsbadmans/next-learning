import React from "react";
import { background } from 'assets';
import Image from 'next/image';

export const Background: React.FC = ({ children }) => {
    return (
        <div className="container flex-center column">
            <Image
                alt="mountains-lake"
                unoptimized={false}
                src={background}
                layout="fill"
                objectFit="cover"
                loading="eager"
            />
            {children}
        </div>
    );
};


