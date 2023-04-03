import React, { useState } from 'react'
import Mail from '../../images/mail.svg'
import Button from '../Button'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });
    
    const [alertMessage, setAlertMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitData = () => {
        const { name, email, number, message } = formData;
        if (name === '' || email === '' || number === '' || message === '') {
            setAlertMessage('Please Fill All The Blanks');
            setTimeout(() => {
                setAlertMessage('');
            }, 3000);
        } else {
            console.log('Data submitted');
            setFormData({
                name: '',
                email: '',
                number: '',
                message: ''
            });
            setAlertMessage('Data Submitted Successfully');
            setTimeout(() => {
                setAlertMessage('')
            }, 3000);
        }
    }

    const inputFields = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Nom*',
            value: formData.name,
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email*',
            value: formData.email,
        },
        {
            name: 'number',
            type: 'number',
            placeholder: 'Téléphone*',
            value: formData.number,
        }
    ];

    return (
        <div className='container py-20 relative px-4'>
            <h1 className=' text-4xl text-primary text-center font-semibold mb-20 sm:pb-10'>Contact</h1>
            {alertMessage && (<p className={`text-white py-3 px-10 rounded-md ${alertMessage === 'Data Submitted Successfully' ? 'bg-green-500 max-w-[300px] alert-message ' : ' bg-red-500 max-w-[269px] alert-message '}`}>  {alertMessage}   </p>)}
            <div className='flex lg:flex-row flex-col justify-between gap-10 items-center'>
                <div className='w-full'>
                    {inputFields.map(input => (
                        <div className='py-5' key={input.name}>

                            <input
                                className={`border outline-none py-2 px-4 w-full md:min-w-[550px] rounded-md ${alertMessage === 'Data Submitted Successfully' ? 'border-red-500' : 'border-secondary'}  `}
                                type={input.type}
                                placeholder={input.placeholder}
                                name={input.name}
                                value={input.value}
                                onChange={handleInputChange}
                            />
                        </div>
                    ))}
                </div>
                <div className='w-full'>
                    <textarea
                        className='px-5 py-5 border border-secondary rounded-md outline-none w-full md:min-w-[550px] h-[205px]'
                        placeholder='Message*'
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='max-w-[152px] flex justify-center mx-auto mt-10'>
                <Button text='Envoyer' img={Mail} onClick={submitData} />
            </div>
        </div>
    )
}

export default Contact
