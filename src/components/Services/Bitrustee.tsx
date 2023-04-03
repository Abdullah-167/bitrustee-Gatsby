import React from 'react'

const Bitrustee = () => {
    return (
        <div className='bg-[#F5F8FA] py-10 md:py-24 mt-20 px-4'>
            <div className='container'>
                <div>
                    <h2 className='text-xl md:text-3xl text-main font-bold text-center max-w-[900px] mx-auto mt-4'>Bitrustee réconcilie expérience utilisateur et isolation des usages</h2>
                    <p className='text-base font-normal text-secondary max-w-[900px] mx-auto text-center py-5 md:py-10'>Bitrustee fournit un système d'exploitation Zero-Trust qui isole les activités à risques et sensibles au sein d'un unique poste de travail. DSI et RSSI y trouverons un optimum entre experience utilisateur, gestion des risques et complexité du SI.</p>
                </div>
                <div className='flex flex-wrap justify-center gap-4 md:gap-8 py-10'>
                    {cards.map((item, index) => {
                        return (
                            <div className='bg-white p-7 rounded-md hover:-translate-y-5 transition-all duration-300' key={index}>
                                <h3 className='text-18px text-main text-center max-w-[312px]'>{item.heading}</h3>
                                <ul className='pt-3'>
                                    <li className='list-disc text-sm text-secondary font-medium max-w-[300px] py-1'>{item.para}</li>
                                    <li className='list-disc text-sm text-secondary font-medium max-w-[300px] py-1'>{item.para2}</li>
                                    <li className='list-disc text-sm text-secondary font-medium max-w-[300px] py-1'>{item.para3}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Bitrustee


const cards = [
    {
        heading: 'Réduction immédiate des risques IT et compliance',
        para: 'Réduction des risque sur vos utlisateurs sensible et à risques notamment administrateurs et developpeurs',
        para2: 'Compliance avec la LPM',
    },
    {
        heading: 'Une IT simplifiée et sans compromis',
        para: 'Moins de matériel à préparer et livrer',
        para2: 'Moins de problème de compatibilité matériel avec un matériel standardisé',
        para3: 'Fini le casse tête du BYOD : le envrionment professionels peuvent cohabiter en tout sécurité à côté d’usage personnels.',

    }, {
        heading: 'Sécurité par le design',
        para: 'L’isolation fournit par le design de la solution Bitrustee permet de se protéger contre toute forme de menace.',
        para2: 'Pas besoin de mises à jour de base anti-viral, pas de faux positifs, ...',
    },
]