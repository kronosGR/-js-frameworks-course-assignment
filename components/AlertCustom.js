import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const AlertCustom = ({ error }) => {
  const [show, setShow] = useState(true);

  return (
    <Alert show={show} className='w-50 m-auto'>
      <Alert.Heading>An error Occurred</Alert.Heading>
      <p>{error}</p>
      <Button onClick={() => setShow(false)} variant='outline-success'>
        Hide
      </Button>
    </Alert>
  );
};

export default AlertCustom;
