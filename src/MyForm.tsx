import { Button, TextField } from '@material-ui/core';
import { Form, Formik, Field } from 'formik';
import * as React from 'react';
import MyField from './Myfield'
// import { RaisedButton } from 'material-ui'



interface Values  {
    firstName: number;
     lastName: string;
    email: string;
}
interface Props { onSubmit: (values: Values) => void }

 const MyForm : React.FC<Props> = ({onSubmit}) => {
     return (
         <Formik initialValues={{ firstName: "", lastName: "", email: "" }}
             onSubmit={values => {
                 onSubmit(values)
             }}
         >
             {() => (
                 <Form>
                     <div>
                         <Field name="firstName" label="firstName"component={MyField} />
                     </div>
                     <div>
                     <Field name="lastName" label="lastName"component={MyField}/>

                     </div>
                     <div>
                     <Field name="email" label="email" component={MyField}/>
                     </div>
                     <Button type="submit">Add</Button>
                </Form>
             )}

         </Formik>
    );
 }

  export default MyForm