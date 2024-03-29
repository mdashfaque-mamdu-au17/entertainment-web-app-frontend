import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Button, Input, InputBoxWrapper, Heading, Title } from '../components';
import logo from '../assets/logo.svg';
import { useMutation } from '@tanstack/react-query';
import customFetch from '../utils/axios';
import { addUserToLocalStorage } from '../utils/localStorage';
import { useGlobalContext } from '../context';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from '../components/Icons';

const Signup = () => {
  const { user, updateLoginUserInfo } = useGlobalContext();
  const navigate = useNavigate();

  const { mutate: signupHandler, isLoading } = useMutation({
    mutationKey: ['signup'],
    mutationFn: async ({ email, password }) => {
      const result = await customFetch.post('/auth/register', {
        email,
        password,
      });
      updateLoginUserInfo(result.data.user);
      addUserToLocalStorage(result.data.user);
    },
    onSuccess: () => {
      toast.success('Registered Successfully!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.msg, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    },
  });

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

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
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
              signupHandler({
                email: values.email,
                password: values.password,
              });
            } catch (error) {
              console.log(error);
            }
            setSubmitting(false);
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
                  <Button
                    type="submit"
                    disabled={isLoading}
                    style={isLoading && 'cursor-wait hover:cursor-wait'}
                  >
                    {isLoading ? <ThreeDots /> : 'Create an account'}
                  </Button>
                </div>
                <div className="flex flex-row gap-2 pt-6 justify-center items-center">
                  <Title type="medium" color="white">
                    Already have an account?
                  </Title>
                  <Title type="medium" color="red">
                    <Link to="/login">Login</Link>
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
