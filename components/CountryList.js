import { Container, Row } from 'react-bootstrap';
import Country from './Country';

const CountryList = ({ countries }) => {
  return (
    <Container>
      <Row xs={12} sm={2} lg={4}>
        {countries.map((country) => {
          console.log(country);
          return (
            <Country
              key={country.name.common}
              name={country.name.common}
              imgUrl={country.flags.png}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default CountryList;
