import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Head from 'next/head';
import NavCustom from '../../components/NavCustom';
import Heading from '../../components/Heading';

const loginSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Enter a valid email address'),
  password: yup.string().required('Password is required'),
});

const loginPage = (props) => {
  function onSubmit(data) {
    console.log(data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mt-4'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='text'
                placeholder='Your email address'
                {...register('email')}
              />
              {errors.email && (
                <span className='alert-danger'>{errors.email.message}</span>
              )}
            </Form.Group>
            <Form.Group className='mt-4'>
              <Form.Label>Passwprd</Form.Label>
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
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default loginPage;
