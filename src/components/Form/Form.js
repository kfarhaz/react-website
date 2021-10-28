import  React   from    'react';

// Imports for Form.element.js
import  {   Button  }   from    '../../globalStyles';
import { NavBtnLink } from '../Navbar/Navbar.elements';
import  {
    FormContainer,
    FormSubscription,
    FormSubHeading,
    FormInput,
    FormBtnLink
}   from    './Form.elements';

const Form = () => {
    return  (
     <>
        <FormContainer>
            <FormSubscription>
            <FormSubHeading>
                Sign Up
            </FormSubHeading>

            <form to='/form'>

                {/* Name */}
                <FormInput  name="name" type="text" placeholder="Your Name" />
                {/* Age */}
                <FormInput  name="age" type="number" placeholder="Age" />
                {/* Address */}
                <FormInput  name="address" type="text" placeholder="Address" />
                {/* Phone Number */}
                <FormInput  name="Number" type="number" placeholder="Number" />
                {/* Email */}
                <FormInput  name="Email" type="text" placeholder="Email" />

                {/* Submit */}
                <FormBtnLink><Button>Submit</Button></FormBtnLink>
            </form>

                
            </FormSubscription>
        </FormContainer>
        
      </>
    );
}

export  default Form;