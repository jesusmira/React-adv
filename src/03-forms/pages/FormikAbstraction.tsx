import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput} from '../components'
import '../styles/styles.css';


export const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Abstraction Tutorial</h1>
        <hr />

        <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                email:'',
                terms: false,
                jobType:''
            }}
            onSubmit={( values ) => {
                console.log( values );
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                    .max(15,'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(10,'Debe de tener 10 caracteres o menos')
                                    .required('Requerido'),
                    email: Yup.string()
                                .email('el correo no tiene un formato válido')
                                .required('Requerido'),
                    terms: Yup.boolean()
                                .oneOf([true],'Debe de aceptar los términos'),
                    jobType: Yup.string()
                                  .notOneOf([ 'it-jr' ], 'Opción no permitida')  
                                  .required('Requerido'),
                                

                })
            }  
        >
            {
                (_formik) => (
                    <Form>
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            placeholder="Jesus" />

                        <MyTextInput
                            label="Last Name"
                            name="lastName"
                            placeholder="Mira" />

                        <MyTextInput
                            label="Email address"
                            name="email"
                            placeholder="john@google.com"
                            type="email" />

                        <MySelect label="Job Type" name="jobType">
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Junior</option>
                        </MySelect>

                        <MyCheckbox label="Terms & Conditions" name="terms"/>

                        <button type="submit">Submit</button>

                    </Form>
                )
            }


        </Formik>

    </div>
  )
}
