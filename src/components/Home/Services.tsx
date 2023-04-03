import React from 'react'
import Pencil from '../../images/blueprint.png'
const Services = () => {
    return (
        <div className='container py-16 px-4'>
            <div>
                <h1 className='text-[32px] font-bold text-main text-center py-3'>Services Cybersecurité Cloud</h1>
                <p className='text-base text-secondary font-semibold py-5 text-center'>Je vous accompagne sur l’ensemble du cycle de la sécuritsation de vos plateformes Cloud : de la prise de décision stratégique vers le déploiement de vos infrastructure et applications métiers dans le Cloud. </p>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
                {cards.map((item, index) => {
                    return (
                        <div className='bg-[#F5F8FA] rounded-xl px-3 pt-3 pb-5 hover:-translate-y-5 transition-all duration-200' key={index}>
                            <div className='reltive overflow-hidden'>
                                <img className='rounded-xl transition-all duration-1000 w-full max-h-64' src={item.img} alt='image' />
                            </div>
                            <div className='services-cards px-3'>
                                <h2 className='text-xl text-main font-medium pt-8'>
                                    {item.heading}
                                </h2>
                                <ul className=' list-disc text-secondary text-sm py-2 pl-3'>
                                    <li className='mb-2'>
                                    {item.para1}
                                    </li>
                                    <li className='mb-2'>
                                    {item.para2}
                                    </li>
                                    <li className='mb-2'>
                                    {item.para3}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='pt-8'>
                {paragraph.map((item, index) => {
                    return (
                        <div key={index}>
                            <ul className='list-disc text-base text-main font-normal py-4'>
                                <li className=''>{item.listContent}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services


const cards = [
    {
        img: Pencil,
        heading: 'Stratégie de sécurité',
        para1: 'Définition de votre stragégie de sécurité dans le Cloud',
        para2: 'Accompagnement à la transformation Cloud',
        para3: 'Gouvernance sécurité'
    },
    {
        img: Pencil,
        heading: 'Architecture Sécurité',
        para1: 'Design et implémentation d’architecture sécurisées.',
        para2: 'Analyse de risque et Threat modeling',
        para3: 'Landing zone, application Cloud-Native, Processus DevSecOps, sécurité conteneur et Kubernetes'
    }, {
        img: Pencil,
        heading: 'Audit de sécurité AWS et Kubernetes',
        para1: 'Audit de configuration',
        para2: 'Recommandation de sécurité',
        para3: 'Remmédiation sécurité'
    },
]


const paragraph = [
    {
        listContent:  <li><span className='font-bold'>Stratégie sécurité Cloud: </span>Nous élaborons ensemble une stratégie de sécurité globale qui répond à vos besoins spécifiques en matière de sécurité du Cloud. Nous évaluons les risques, définissons les politiques de sécurité, les meilleures pratiques et élaborerons un plan d actions pour améliorer la sécurité de l environnement Cloud.</li>
    },
    {
        listContent: <li><span className='font-bold'>Architecture/Design sécurité: </span>Nous élaborons ensemble une stratégie de sécurité globale qui répond à vos besoins spécifiques en matière de sécurité du Cloud. Nous évaluons les risques, définissons les politiques de sécurité, les meilleures pratiques et élaborerons un plan d actions pour améliorer la sécurité de l environnement Cloud.</li>
    }, {
        listContent: <li><span className='font-bold'>Audit de sécurité AWS et Kubernetes: </span>Nous concevons et mettons en œuvre des architectures de sécurité Cloud robustes pour protéger les applications et vos processus et données sensibles . Je travaille en étroite collaboration avec vouss pour comprendre leurs exigences de sécurité et concevoir des solutions sur mesure qui répondent à vos besoins spécifiques.        </li>
    },
]