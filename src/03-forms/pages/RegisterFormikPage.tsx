import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components'
import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <hr />
            <Formik
            initialValues={{
                name:'',
                email:'',
                password1:'',
                password2:'',
            }}
            onSubmit={( values ) => {
                console.log( values );
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                                    .min(2,'Debe de tener 2 caractéres o más')    
                                    .max(15,'Debe de tener 15 caractéres o menos')
                                    .required('Requerido'),
                    email: Yup.string()
                                .email('el correo no tiene un formato válido')
                                .required('Requerido'),
                    password1: Yup.string()
                                    .required('Requerido')
                                    .min(6,'Debe tener 6 caractéres o más'),
                    password2: Yup.string()
                                    .required('Requerido')
                                    .min(6,'Debe tener 6 caractéres o mas')
                                    .oneOf([Yup.ref('password1')], 'Las contraseñas deben ser iguales')                

                })
            }  
        >
            {
                ({handleReset}) => (
                    <Form>
                        <MyTextInput
                            label="Nombre"
                            placeholder='Jesús'
                            name="name"/>

                        <MyTextInput
                            label="Email"
                            name="email"
                            placeholder='john@google.com'
                            type="email" />

                        <MyTextInput 
                            label="Contraseña"
                            name="password1"
                            type="password"
                        />
                        <MyTextInput 
                            label="Repita Contraseña"
                            name="password2"
                            type="password"
                        />

                        

                        <button type="submit">Submit</button>
                        <button type="button" onClick={ handleReset }>Reset Form</button>
                    </Form>
                )
            }

            </Formik>

        </div>
    )
}
