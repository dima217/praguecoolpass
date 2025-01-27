// @ts-nocheck
import React, { useEffect, useState } from 'react';

export function CustomRating({
    setValue, error, value, title
}) {
    const [initialized, setInitialized] = useState(false);

    const handleStarClick = (index) => {
        setValue('rating', index + 1);
    };

    useEffect(() => {
        if (!initialized) {
            setValue('rating', 0);
            setInitialized(true);
        }
    }, [initialized, setValue]);

    return (
        <div>
            <div className="md:flex items-center md:mb-0 ml-[3px] md:ml-0 mb-5">
                <label htmlFor="rating" className="block text-sm text-gray-700 font-bold mr-[15px]">
                    {title || 'GIVE YOUR RATING*'}
                </label>
                <div className="flex items-center justify-start">
                    <div className="flex items-center w-[130px] md:h-10 h-[57px]">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <img
                                key={index}
                                src={
                                    index < value
                                        ? 'https://www.praguecoolpass.com/img/star-active.2039dc72.svg'
                                        : 'https://www.praguecoolpass.com/img/star-modal-inactive.52366313.svg'
                                }
                                alt={index < value ? 'Active star' : 'Inactive star'}
                                className="w-10 h-10 p-[5px] pl-0 cursor-pointer"
                                onClick={() => handleStarClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
    );
}


