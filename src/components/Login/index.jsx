import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, Grid, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6)
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {

  }

  return (
    <>
      <Dialog open={true}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>

                  <Grid container spacing={3} direction='column'>
                    <Grid item xs={12}>
                      <TextField
                        name='email'
                        error={errors.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        label='Email'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name='password'
                        error={errors.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        label='Password'
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type='Submit'
                      disabled={isSubmitting}
                      label='Submit'
                    >Submit</Button>
                  </Grid>
                </form>
              )
            }
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Login;
