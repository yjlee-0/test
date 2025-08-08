import Image from 'next/image'
import React from 'react';

interface CardImageComponentProps {
    width: number;
    height: number;
    src: string;
    alt: string;
}

const HeroImage = ({ width, height, src, alt }: CardImageComponentProps) => {
    return <Image width={width} height={height} src={src} alt={alt}></Image>
};

export default HeroImage;