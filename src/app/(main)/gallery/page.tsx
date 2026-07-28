'use client';

import { useState } from 'react';

const galleryImages = [
    { src: '/img/gallery/funfarm_n1.png', alt: 'Goat at Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n2.png', alt: 'Goat at Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n3.png', alt: 'Goat at Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n4.png', alt: 'Birds at Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n5.png', alt: 'Goat at Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n6.png', alt: 'Goats at Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n7.png', alt: 'Goats at Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n8.png', alt: 'Ducks in Water' },
    {
        src: '/img/gallery/funfarm_n9.png',
        alt: 'Goat inside the paddock system',
    },
    { src: '/img/gallery/funfarm_n10.png', alt: 'Goat at Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n11.png', alt: 'Birds at Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n12.png', alt: 'Duck facing behind' },
    { src: '/img/gallery/funfarm_n13.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n14.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n15.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n16.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n17.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n18.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n19.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n20.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n21.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n22.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n23.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n24.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n25.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n26.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n27.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/funfarm_n28.png', alt: 'Fun Farming Uganda' },
    { src: '/img/gallery/bbq.jpg', alt: 'BBQ at Fun Farming Uganda' },
];

export default function GalleryPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <style jsx>{`
                .gallery {
                    display: grid;
                    grid-template-columns: repeat(
                        auto-fill,
                        minmax(250px, 1fr)
                    );
                    grid-auto-rows: 250px;
                    grid-gap: 15px;
                    padding: 20px;
                }
                .gallery-image {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    object-fit: cover;
                    object-position: center;
                    transition: transform 0.3s ease;
                    border-radius: 8px;
                }
                .gallery-image:hover {
                    transform: scale(1.02);
                }
                .modal {
                    display: none;
                    position: fixed;
                    z-index: 1000;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                    background-color: rgba(0, 0, 0, 0.9);
                    justify-content: center;
                    align-items: center;
                }
                .modal.open {
                    display: flex;
                }
                .modal-content {
                    max-width: 90%;
                    max-height: 90%;
                }
                .modal-image {
                    max-width: 100%;
                    max-height: 80vh;
                    border-radius: 8px;
                }
                .close {
                    position: absolute;
                    top: 20px;
                    right: 35px;
                    color: #fff;
                    font-size: 40px;
                    font-weight: bold;
                    cursor: pointer;
                    z-index: 1001;
                }
                .close:hover {
                    color: #ccc;
                }
                .modal-title {
                    color: #fff;
                    text-align: center;
                    margin-bottom: 10px;
                }
            `}</style>

            <div className="l-main">
                <div className="o-imagebanner">
                    <img
                        src="/img/gallery/funfarm_n26.png"
                        alt="Farm Lounge Header Image"
                    />
                </div>

                <div className="gallery">
                    {galleryImages.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="gallery-image"
                            loading="lazy"
                            onClick={() => openModal(image)}
                        />
                    ))}
                </div>

                {modalOpen && selectedImage && (
                    <div
                        className="modal open"
                        onClick={closeModal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <div className="modal-content">
                            <h2 id="modal-title" className="modal-title">
                                {selectedImage.alt}
                            </h2>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="modal-image"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
