import React, { FC } from 'react'

interface ButtonProps {
    text: string;
    img: any;
    onClick: any;
}

const Button: FC<ButtonProps> = ({ text, img , onClick}) => {
    return (
        <div className='flex justify-between gap-5 w-full text-white bg-primary border border-primary px-6 py-3 rounded cursor-pointer hover:bg-[#FA992D] transition-all duration-200' onClick={onClick}>
            <span className='text-base font-bold'>
                {text}
            </span>
            <span>
                <img src={img} alt='icon' />
            </span>
        </div>
    )
}

export default Button