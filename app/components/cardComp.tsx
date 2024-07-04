'use client'
import React, { useState } from 'react';
import Modal from './modal';

interface Image {
    url: string;
    alt: string;
}

interface CardProps {
    title: string;
    description: string;
    longdesc: string;
    img?: Image[]; 
    modalWidth?: string;
}

const CardComp: React.FC<CardProps> = ({ title, description, longdesc, img,  modalWidth }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ description: '', title: '' });

    const handleCardClick = (description: string, title: string) => {
        setModalContent({ description, title });
        setIsModalOpen(true);
    };

    return (
        <div className="max-w-sm rounded relative overflow-hidden shadow-lg p-4 bg-white">
            <div className="font-bold text-darkblu font-mont text-xl mb-2">{title}</div>
            <p className="text-darkblu text-base pb-9">{description}</p>
            <p onClick={() => handleCardClick(longdesc, title)} className="text-darkblu bg-yelaccent px-4 py-[2px] rounded-xl hover:bg-opacity-70 cursor-pointer text-center bottom-0 mx-auto left-0 right-0 w-fit absolute mb-2 text-base">Detail di sini</p>
            {isModalOpen == true && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className={modalWidth}>
                    <h4 className="text-xl text-center font-mont text-darkblu font-semibold md:text-2xl lg:text-3xl mb-3">{modalContent.title}</h4>
                    <p className="">{modalContent.description}</p>
                    <div className="grid grid-cols-3 gap-2 justify-items-center">
                    {img && img.map((image, index) => (
                        <div className="w-full h-56 lg:h-56" key={index}>
                            <img className='rounded-2xl w-full h-full object-cover' src={image.url} alt={image.alt} />
                        </div>
                    ))}
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default CardComp;