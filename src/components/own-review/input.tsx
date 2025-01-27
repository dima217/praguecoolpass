// @ts-nocheck
import PropTypes from 'prop-types';
import React from 'react';

export function CustomInput({
    error, register, labeltext, placeholdertext, type = 'text', id
}) {
    return (
        <div className='mr-5 mb-[15px]'>
            <div className="flex items-center space-x-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-900">
                    {labeltext}
                </label>
                {error && (
                    <p className="text-red-500 text-xs">{error.message}</p>
                )}
            </div>
            <input
                id={id}
                type={type}
                placeholder={placeholdertext}
                required={true}
                {...register(id)}
                maxLength={40}
                className={`block w-full border-[0.8px] ${error ? 'border-red-500' : 'border-[#dbdbdb]'} shadow-sm sm:text-sm mt-[10px] p-[15px] focus:outline-none focus:border-[#585858]`}
            />
        </div>
    );
}

CustomInput.propTypes = {
    error: PropTypes.shape({
        message: PropTypes.string
    }),
    register: PropTypes.func.isRequired,
    labeltext: PropTypes.string.isRequired,
    placeholdertext: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string.isRequired
};

