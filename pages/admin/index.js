import { Container } from 'react-bootstrap';
import Heading from '../../components/Heading';
import NavCustom from '../../components/NavCustom';

const AdminPage = () => {
  return (
    <Container>
      <NavCustom />

      <Heading title='Admin Page' />
    </Container>
  );
};

export default AdminPage;
