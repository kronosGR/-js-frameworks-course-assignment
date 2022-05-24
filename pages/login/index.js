import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Head from 'next/head';
import NavCustom from '../../components/NavCustom';
import Heading from '../../components/Heading';
import { useState } from 'react';
import axios from 'axios';
import AlertCustom from '../../components/AlertCustom';
import { useRouter } from 'next/router';

const url = process.env.NEXT_PUBLIC_WP_BASE_URL;

const loginSchema = yup.object().shape({
  identifier: yup.string().required('Please enter your username'),
  password: yup.string().required('Please enter your password'),
});

const LoginPage = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const res = await axios.post(url, data);
      console.log(res.data);
      router.push('/admin');
    } catch (error) {
      console.log('error', error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Container>
      <Head>
        <title>JS Frameworks CA | Login</title>
        <meta
          name='description'
          content='Javascript Frameworks Course Assignment, Login page '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavCustom />

      <Heading title='Login' />
      <Row>
        <Col md={6} className='m-auto'>
          {loginError && <AlertCustom error='Login Failed' />}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mt-4'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Your username'
                {...register('identifier')}
              />
              {errors.email && (
                <span className='alert-danger'>{errors.identifier.message}</span>
              )}
            </Form.Group>
            <Form.Group className='mt-4'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Your password'
                {...register('password')}
              />
              {errors.password && (
                <span className='alert-danger'>{errors.password.message}</span>
              )}
            </Form.Group>
            <Button className='mt-4' variant='primary' type='submit'>
              {submitting ? 'Wait...' : 'Login'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
