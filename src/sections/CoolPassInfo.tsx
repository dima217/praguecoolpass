// @ts-nocheck
import React from 'react';

export const CoolPassInfo = ({
    daysHoursInfo,
    childInfo,
    studInfo,
    adultAge,
    studAge,
    childAge
}) => (<div className="max-w-[1140px] mx-auto p-2 pt-0 text-gray-800 grid max-gap-[15px] md:min-gap-[10px] md:grid-cols-3 grid-rows-1 text-xs">
    <ul className="mt-8 list-none md:max-w-[366px] max-w-fit">
        <li className="md:mb-4 mb-0 flex items-start">
            <img
                src="https://www.praguecoolpass.com/img/list-bullet.bfaee876.svg"
                alt="bullet"
                className="w-[5px] h-[5px] mt-[6px] mr-1 ml-1" />
            <p className='mb-[11px] pl-[10px] pr-[5px]'>{daysHoursInfo || 'Prague CoolPass/Card is valid for consecutive days, not hours.'}</p>
        </li>
        <li className="md:mb-4 mb-0 flex items-start">
            <img
                src="https://www.praguecoolpass.com/img/list-bullet.bfaee876.svg"
                alt="bullet"
                className="w-[5px] h-[5px] mt-[11px] mr-1 ml-1" />
            <p className='mb-[11px] pl-[10px]'>{childInfo || 'Child/Student Pass is valid for children 6-16 years old and students on daily studies up to 26 years old.'}</p>
        </li>
    </ul>
    <ul className="md:mt-8 mt-0 list-none md:max-w-[366px]">
        <li className="md:mb-4 mt-0 flex items-start">
            <img
                src="https://www.praguecoolpass.com/img/list-bullet.bfaee876.svg"
                alt="bullet"
                className="w-[5px] h-[5px] mt-[6px] mr-[3px] ml-1" />
            <p className="mb-4 pl-[10px] pr-[5px]">
                {studInfo || '  Any national or international student ID is OK. You do not need it when buying the Pass, but you could be asked to show it when entering the attractions with a student CoolPass.'}
            </p>
        </li>
    </ul>

    <div className="text-left font-bold md:max-w-[366px] md:mt-8 md:px-0 mt-0 md:text-sm text-xs px-[25px] md:ml-5">
        <div className='flex md:flex-col flex-row justify-between'>
            <p className='mb-[10px]'>{adultAge || 'ADULT 16+ years'}</p>
            <p className='mb-[10px]'>{studAge || 'STUDENT 16 - 26 years'}</p>
        </div>
        <p className=''>{childAge || 'CHILD 6 - 16 years'}</p>
    </div>
</div>);



