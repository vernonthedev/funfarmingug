'use client';

import Image from 'next/image';

export function Preloader() {
    return (
        <div id="loading">
            <div id="loading-center">
                <div className="loader-container">
                    <div className="wrap-loader">
                        <div className="loader"></div>
                        <div className="icon">
                            <Image
                                src="/logo.png"
                                alt="Fun Farming Uganda"
                                width={50}
                                height={50}
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}