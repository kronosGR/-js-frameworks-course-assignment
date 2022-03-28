import Head from 'next/head';
import Image from 'next/image';
import { Button, Container } from 'react-bootstrap';
import CountryList from '../components/CountryList';
import Heading from '../components/Heading';
import NavCustom from '../components/NavCustom';
import styles from '../styles/Home.module.css';

export default function Home(props) {
  return (
    <Container>
      <Head>
        <title>JS Frameworks CA</title>
        <meta name='description' content='JavaScript Frameworks Course Assignments' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavCustom />

      <Heading title='Countries' />
      <CountryList countries={props.data} />
    </Container>
  );
}

export async function getServerSideProps() {
  let data = [];
  try {
    const result = await fetch('https://restcountries.com/v3.1/all');

    const json = await result.json();
    data = json;
  } catch (error) {
    console.error(error);
  }

  return {
    props: { data },
  };
}
