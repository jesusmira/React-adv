import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components Tutorial</h1>
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
                    <Form >
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span"/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span"/>

                        <label htmlFor="email">Email address</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="span"/>

                        <label htmlFor="JobType">Job Type</label>
                        <Field name="jobType" as="select" >
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Junior</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span"/>    

                        <label >
                        <Field name="terms" type="checkbox" />
                            Terms and Conditions</label>
                        <ErrorMessage name="terms" component="span"/>

                        <button type="submit">Submit</button>

                    </Form>
                )
            }


        </Formik>

    </div>
  )
}
