import React from 'react';
import  {   homeObjOne, homeObjTwo, homeObjThree, homeObjFour    }   from   './Data';
import     InfoSection    from    '../../components/InfoSection/InfoSection';
import     Pricing    from    '../../components/Pricing/Pricing';


const   Services    =   ()  =>  {
    return  (
        <>
        <Pricing    />
        <InfoSection {...homeObjFour}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjOne}/>
        </>
    )
}

export default Services;