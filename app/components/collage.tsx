"use client"
import React from 'react';

interface CollageProps {
    imageItems: { img: string, desc: string }[];
}

const Collage: React.FC<CollageProps> = ({ imageItems }) => {



    return (
        <div className="grid grid-cols-2 h-[450px] gap-2">
            {imageItems.slice(0, 4).map((item, index) => (
                <div key={index} className="relative overflow-hidden col-span-1 rounded-3xl row-span-1">
                    <img src={item.img} alt={`Collage ${index + 1}`} className="w-full h-full object-cover" />
                </div>
            ))}
           
        </div>
    );
};

export default Collage;