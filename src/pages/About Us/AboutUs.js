import React from 'react';
import  {   homeObjOne, homeObjTwo, homeObjThree, homeObjFour    }   from   './Data';
import     InfoSection    from    '../../components/InfoSection/InfoSection';
import     Pricing    from    '../../components/Pricing/Pricing';


const   AboutUs    =   ()  =>  {
    return  (
        <>
        <InfoSection {...homeObjFour}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjOne}/>
        <Pricing    />
        </>
    )
}

export default AboutUs;