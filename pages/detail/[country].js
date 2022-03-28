import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import Heading from '../../components/Heading';
import NavCustom from '../../components/NavCustom';

const Detail = ({ data }) => {
  console.log(data[0]);
  return (
    <Container className='text-center'>
      <Head>
        <title>JS Frameworks CA</title>
        <meta name='description' content='JavaScript Frameworks Course Assignments' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavCustom />

      <Heading title={data[0].name.official} />
      <h2>Capital: {data[0].capital}</h2>
      <p>Continent: {data[0].subregion}</p>
      <Image
        src={data[0].flags.png}
        alt={data[0].name.official}
        width={200}
        height={150}
        className={{ objectFit: 'cover' }}
      />
    </Container>
  );
};

export async function getServerSideProps({ params }) {
  let data = [];

  try {
    const result = await fetch(`https://restcountries.com/v3.1/name/${params.country}`);

    const json = await result.json();
    data = json;
  } catch (error) {
    console.error(error);
  }

  return {
    props: { data },
  };
}

export default Detail;
