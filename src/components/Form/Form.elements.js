// Elements which will be used in Form.js
import  styled  from    'styled-components';
import  {   FaMagento   }   from    'react-icons/fa';
import  {   Link    }   from    'react-router-dom';

export  const   FormContainer =   styled.div  `
background-color    :   #101522;
display :   flex;
justify-content :   center;
align-items :   center;
flex-direction: column;
`;

export  const   FormSubscription  =   styled.section  `
display :   flex;
justify-content :   center;
align-items :   center;
text-align  :   center;
padding :   24px;
color   :   #fff;
background-color: #4b59f7;
flex-direction: column;
`;

export const    FormSubHeading  =   styled.p`
font-family :   'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans' Arial, sans-serif;
margin-bottom   :   24px;
font-size   :   24px;
`;

export  const   FormInput   =   styled.input`
padding :   10px    20px;
border-radius   :   2px;
margin-right    :   10px;
outline :   none;
border  :   none;
font-size   :   16px;
border  :   1px solid   #fff;
display: block;
min-width: 350px;
margin: 10px;
margin-bottom: 20px;

&::placeholder  {
    color   :   #242424;
}

@media  screen  and(max-width   :   820px)  {
    width   :   100%;
    margin  :   0   0   16px    0;
}
`;
export const FormBtnLink = styled.button`
display: flex;
margin: 10px;
justify-content: flex-start;
border: none;
border-radius: 5px;
background-color: #101522;
`;
