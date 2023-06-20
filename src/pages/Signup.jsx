import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Input, InputBoxWrapper, Heading, Title } from '../components';
import logo from '../assets/logo.svg';
import { useMutation } from '@tanstack/react-query';
import customFetch from '../utils/axios';

const Signup = () => {
  const { mutate: signupHandler, isLoading } = useMutation({
    mutationKey: ['signup'],
    mutationFn: async ({ email, password }) => {
      const result = await customFetch.post('/auth/register', {
        email,
        password,
      });
      console.log(result);
    },
    onSuccess: () => {
      alert('successful');
    },
    onError: (error) => {
      console.log(error?.response?.data?.msg);
    },
  });

  return (
    <div className="">
      <div className="pt-12 pb-[58px] md:pt-20 md:pb-[72px] lg:pt-[78px] lg:pb-[83px]">
        <img src={logo} alt="" className="w-8 h-[25px] mx-auto" />
      </div>
      <InputBoxWrapper>
        <Formik
          initialValues={{ email: '', password: '', passwordConfirmation: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email')
              .required("Can't be empty"),
            password: Yup.string()
              .min(6, 'Invalid password')
              .required("Can't be empty"),
            passwordConfirmation: Yup.string()
              .required("Can't be empty")
              .oneOf([Yup.ref('password')], 'password must match'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log({ ...values });
            signupHandler({ email: values.email, password: values.password });
            resetForm();
          }}
        >
          {(formik) => {
            return (
              <Form className="px-6 pt-6 pb-[26px] md:px-8 md:py-8">
                <Heading>Sign Up</Heading>
                <div className="flex flex-col gap-6 pt-10">
                  <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                  />

                  <Input
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />

                  <Input
                    label="resetPassword"
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Repeat password"
                  />
                </div>
                <div className="pt-10 md:pt-6">
                  <Button type="submit">Create an account</Button>
                </div>
                <div className="flex flex-row gap-2 pt-6 justify-center items-center">
                  <Title type="medium" color="white">
                    Already have an account?
                  </Title>
                  <Title type="medium" color="red">
                    <a href="">Login</a>
                  </Title>
                </div>
              </Form>
            );
          }}
        </Formik>
      </InputBoxWrapper>
    </div>
  );
};

export default Signup;
