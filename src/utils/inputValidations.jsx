export const first_name_validation = {
    name: 'firstname',
    label: 'firstname',
    type: 'text',
    id: 'firstname',
    placeholder: 'First Name',
    validation: {
      required: {
        value: true,
        message: 'First Name cannot be empty',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }

  export const last_name_validation = {
    name: 'lastname',
    label: 'lastname',
    type: 'text',
    id: 'lastname',
    placeholder: 'Last Name',
    validation: {
      required: {
        value: true,
        message: 'Last Name cannot be empty',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }
  
  export const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'Password',
    validation: {
      required: {
        value: true,
        message: 'Password cannot be empty',
      },
      minLength: {
        value: 6,
        message: 'min 6 characters',
      },
    },
  }
  
  export const email_validation = {
    name: 'email',
    label: 'email',
    type: 'email',
    id: 'email',
    placeholder: 'Email Adress',
    validation: {
      required: {
        value: true,
        message: 'Email cannot be empty',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Looks like this is not an email',
      },
    },
  }