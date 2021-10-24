import React from 'react';
import  {   homeObjOne, homeObjTwo, homeObjThree, homeObjFour    }   from   './Data';
import     InfoSection    from    '../../components/InfoSection/InfoSection';
import     Pricing    from    '../../components/Pricing/Pricing';


const   ContactUs    =   ()  =>  {
    return  (
        <>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjFour}/>
        <Pricing    />
        </>
    )
}

export default ContactUs;