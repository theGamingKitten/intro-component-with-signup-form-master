import { useFormContext } from 'react-hook-form';
import { findInputError } from '../utils/findInputError';
import { isFormInvalid } from '../utils/isFormInvalid';
import { AnimatePresence, motion } from 'framer-motion';
import errorSVG from '../assets/icon-error.svg';
import './Form.css';

export default function Input({label, type, id, placeholder, validation, name}) {
    const { 
        register,
    formState: { errors },
    } = useFormContext();

    const inputError = findInputError(errors, label);
    const isInvalid = isFormInvalid(inputError);

    return (
        <>
            <label htmlFor={id}>{label}</label>                     
            <input
                className={isInvalid ? "error" : "valid"}
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(name, validation)}
            />
            <AnimatePresence mode="wait" initial={false}>
                {isInvalid && (
                    <InputError
                        message={inputError.error.message}
                        key={inputError.error.message}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

const InputError = ({ message }) => {
    return (        
      <motion.p        
        {...framer_error}
      >            
        {message}  
        <img className="error-icon" src={errorSVG} alt="Error"/>
      </motion.p>
    )
  }
  
  const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
  }