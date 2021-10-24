import  React   from    'react';

// Imports for Form.element.js
import  {   Button  }   from    '../../globalStyles';
import  {
    FormContainer,
    FormSubscription,
    FormSubHeading,
    FormSubText,
    Form2,
    FormInput,
}   from    './Form.elements';

const   Form    =   ()  =>  {
    return  (
        <FormContainer>
            <FormSubscription>
            <FormSubHeading>
                SignUp to continue.
            </FormSubHeading>

            <form>

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
                <Button fontBig>Submit</Button>
                <Button fontBig>Cancel</Button>
            </form>

                
            </FormSubscription>
        </FormContainer>
    );
}

export  default Form;