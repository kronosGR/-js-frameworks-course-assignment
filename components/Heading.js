import { Container } from 'react-bootstrap';

const Heading = (props) => {
  return (
    <Container>
      <h1>{props.title}</h1>
    </Container>
  );
};

export default Heading;
