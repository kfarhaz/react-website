import React from 'react';
import  {   homeObjOne, homeObjTwo, homeObjThree, homeObjFour    }   from   './Data';
import     InfoSection    from    '../../components/InfoSection/InfoSection';
import     Pricing    from    '../../components/Pricing/Pricing';


const   Products    =   ()  =>  {
    return  (
        <>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjOne}/>
        <Pricing    />
        <InfoSection {...homeObjFour}/>
        <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Products;