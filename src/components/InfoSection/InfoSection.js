import React from 'react';
import { Link} from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { useState } from 'react';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements';


const InfoSection = ({
    primary,
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDesc,
    buttonLabel,
    description,
    lightText,
    topLine,
    img,
    alt,
    start
}) => {

const [headline, setHeading] = useState('Lead Generation Specialist for Online Business');
 
function updateHeading() {
     setHeading('Successfull Lead Generation Specialist for Online Business');
 }

    return (
        <>
        {/* Structure of InfoSection START */}
          <InfoSec lightBg={lightBg}>
              <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                               <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                               <Heading lightText={lightText}>{headline}</Heading>
                               <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                               <Link to='/'>
                                   <Button big fontBig primary={primary} onClick={updateHeading}>
                                       {buttonLabel}
                                   </Button>
                               </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
              </Container>
          </InfoSec>  
          {/* Structure of InfoSection END */}
        </>
    )
}

export default InfoSection;
