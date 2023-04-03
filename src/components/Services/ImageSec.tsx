import React from 'react'
import Arrow from '../../images/arrow.svg'
import Studying from '../../images/studing.png'
import Button from '../Button'

const ImageSec = () => {
    return (
        <div className='py-20'>
            <div>
                {cards.map((item, index) => {
                    if (index % 2 === 0) {
                        return (
                            <div className='container grid-cols-1 md:grid-cols-2 gap-20 py-14 md:px-0 px-4' key={index}>
                                <div className='max-w-[400px] pt-7 relative overflow-hidden'>
                                    <img className=' transform-gpu hover:scale-105 transition-all duration-1000' src={item.img} alt={item.alt} />
                                </div>
                                <div>
                                    <h1 className='text-xl md:text-3xl text-main font-bold mdLpt-0 pt-10 md:pb-10 pb-3'>{item.heading}</h1>
                                    <p className='text-base py-2 text-secondary font-light'>{item.para1}</p>
                                    <p className='text-base py-2 text-secondary font-light'>{item.para2}</p>
                                    <div className='max-w-[220px] mt-3'>
                                        <Button text={item.btnText} img={item.btnImg} onClick={undefined} />
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div className='bg-[#F5F8FA]'>
                                <div className='container grid grid-cols-1 md:grid-cols-2 gap-20 py-14 md:px-0 px-4' key={index}>
                                    <div>
                                        <h1 className='text-xl md:text-3xl text-main font-bold pt-10 md:pb-10 pb-3'>{item.heading}</h1>
                                        <p className='text-base py-2 text-secondary font-light'>{item.para1}</p>
                                        <p className='text-base py-2 text-secondary font-light'>{item.para2}</p>
                                        <div className='max-w-[220px] mt-2'>
                                            <Button text={item.btnText} img={item.btnImg} onClick={undefined} />
                                        </div>
                                    </div>
                                    <div className='max-w-[400px] pt-7 relative overflow-hidden'>
                                        <img className=' transform-gpu hover:scale-105 transition-all duration-1000' src={item.img} alt={item.alt} />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>

        </div>
    )
}

export default ImageSec


const cards = [
    {
        heading: 'Travaillez à labri des menaces',
        para1: 'Eliminer les menaces visant spécifiquement vos utilsateurs critiques, phishing et malware, en les arrêtant au plus tôt dans la chaine daccès utilisateur.',
        para2: 'En isolant les données et les accés à vos infrastuctures techniques dInternet, Bitrusteee Workstation empèche les attaquants dimpacter vos données et processus sensibles',
        btnText: 'En savoir plus',
        btnImg: Arrow,
        img: Studying,
        alt: 'img'
    },
    {
        heading: 'Travaillez à labri des menaces',
        para1: 'Eliminer les menaces visant spécifiquement vos utilsateurs critiques, phishing et malware, en les arrêtant au plus tôt dans la chaine daccès utilisateur.',
        para2: 'En isolant les données et les accés à vos infrastuctures techniques dInternet, Bitrusteee Workstation empèche les attaquants dimpacter vos données et processus sensibles',
        btnText: 'En savoir plus',
        btnImg: Arrow,
        img: Studying,
        alt: 'img'
    }, {
        heading: 'Travaillez à labri des menaces',
        para1: 'Eliminer les menaces visant spécifiquement vos utilsateurs critiques, phishing et malware, en les arrêtant au plus tôt dans la chaine daccès utilisateur.',
        para2: 'En isolant les données et les accés à vos infrastuctures techniques dInternet, Bitrusteee Workstation empèche les attaquants dimpacter vos données et processus sensibles',
        btnText: 'En savoir plus',
        btnImg: Arrow,
        img: Studying,
        alt: 'img'
    }, {
        heading: 'Travaillez à labri des menaces',
        para1: 'Eliminer les menaces visant spécifiquement vos utilsateurs critiques, phishing et malware, en les arrêtant au plus tôt dans la chaine daccès utilisateur.',
        para2: 'En isolant les données et les accés à vos infrastuctures techniques dInternet, Bitrusteee Workstation empèche les attaquants dimpacter vos données et processus sensibles',
        btnText: 'En savoir plus',
        btnImg: Arrow,
        img: Studying,
        alt: 'img'
    },
]