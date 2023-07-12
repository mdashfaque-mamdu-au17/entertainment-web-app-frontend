import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Input, InputBoxWrapper, Heading, Title } from '../components';
import logo from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { useMutation } from '@tanstack/react-query';
import customFetch from '../utils/axios';
import { toast } from 'react-toastify';
import { addUserToLocalStorage } from '../utils/localStorage';

const Login = () => {
  const { user, updateLoginUserInfo } = useGlobalContext();
  const navigate = useNavigate();

  const { mutate: loginHandler, isLoading } = useMutation({
    mutationKey: ['login'],
    mutationFn: async ({ email, password }) => {
      const result = await customFetch.post('/auth/login', { email, password });
      updateLoginUserInfo(result.data.user);
      addUserToLocalStorage(result.data.user);
    },
    onSuccess: () => {
      toast.success('Loged in Successfully!', {
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
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email')
              .required("Can't be empty"),
            password: Yup.string()
              .min(6, 'Invalid password')
              .required("Can't be empty"),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
              loginHandler({ email: values.email, password: values.password });
            } catch (error) {
              console.log(error);
            }
            setSubmitting(false);
          }}
        >
          {(formik) => {
            return (
              <Form className="px-6 pt-6 pb-8 md:px-8 md:py-8">
                <Heading>Login</Heading>
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
                </div>
                <div className="pt-10">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    style={isLoading && 'cursor-wait hover:cursor-wait'}
                  >
                    {isLoading ? 'Submitting...' : 'Login to your account'}
                  </Button>
                </div>
                <div className="flex flex-row gap-2 pt-6 justify-center items-center">
                  <Title type="medium" color="white">
                    Don't have an account?
                  </Title>
                  <Title type="medium" color="red">
                    <Link to="/signup">Sign Up</Link>
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

export default Login;
