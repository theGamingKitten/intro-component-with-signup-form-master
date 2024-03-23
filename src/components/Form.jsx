import './Form.css';
import Input from './Input';
import { FormProvider, useForm } from 'react-hook-form';
import {
    first_name_validation,
    last_name_validation,
    email_validation,
    password_validation,
  } from '../utils/inputValidations';

export default function Form() {
    const methods = useForm();
    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
    });

    return (
        <>
        <div className="outer-form-container">
            <p className="try-it"><span className="bold">Try it free 7 days </span> 
             then $20/mo. thereafter</p>
                <div className="form-container">   
                <FormProvider {...methods}>
                <form 
                    method='post'
                    onSubmit={e => e.preventDefault()}                
                    noValidate
                    autoComplete='off'>
                    
                    <Input {...first_name_validation} />
                    <Input {...last_name_validation} />
                    <Input {...email_validation} />
                    <Input {...password_validation} />
                    <button onClick={onSubmit} className="claim">
                    Claim your free trial</button>
                </form>
                </FormProvider>
                <p className="terms">By clicking the button, you are agreeing to our 
                <a href="#" className="terms-link bold"> Terms and Services</a></p>
                </div>
        </div>
        </>
    );
}