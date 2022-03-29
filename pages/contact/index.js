import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Heading from '../../components/Heading';
import Head from 'next/head';
import NavCustom from '../../components/NavCustom';

const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .min(3, 'Please 3 chars minimum'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(4, 'Please 4 chars minimum'),
  email: yup.string().email('Enter a valid email address').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Minimum 10 chars'),
});

const ContactPage = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Head>
        <title>JS Frameworks CA | Contact</title>
        <meta
          name='description'
          content='JavaScript Frameworks Course Assignments, contact page'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavCustom />

      <Heading title='Contact' />
      <Row>
        <Col md={6} className='m-auto'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mt-4'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your first name'
                {...register('firstName')}
              />
              {errors.firstName && (
                <span className='alert-danger'>{errors.firstName.message}</span>
              )}
            </Form.Group>
            <Form.Group className='mt-4'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your last name'
                {...register('lastName')}
              />
              {errors.lastName && (
                <span className='alert-danger'>{errors.lastName.message}</span>
              )}
            </Form.Group>
            <Form.Group className='mt-4'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='text'
                {...register('email')}
                placeholder='Enter your email address'
              />
              {errors.email && (
                <span className='alert-danger'>{errors.email.message}</span>
              )}
            </Form.Group>
            <Form.Group className='mt-4'>
              <Form.Label>Subject</Form.Label>
              <Form.Select {...register('subject')}>
                <option value='Feedback'>Feedback</option>
                <option value='Suggestion'>Suggestion</option>
              </Form.Select>
              {errors.subject && (
                <span className='alert-danger'>{errors.subject.message}</span>
              )}
            </Form.Group>
            <Form.Group className='mt-4'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                type='text'
                as='textarea'
                size='lg'
                {...register('message')}
                placeholder='Please add your message'></Form.Control>
              {errors.message && (
                <span className='alert-danger'>{errors.message.message}</span>
              )}
            </Form.Group>
            <Button className='mt-4' variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
