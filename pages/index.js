import Head from 'next/head';
import Image from 'next/image';
import { Button, Container } from 'react-bootstrap';
import NavCustom from '../components/NavCustom';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>JS Frameworks CA</title>
        <meta name='description' content='JavaScript Frameworks Course Assignments' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavCustom />
    </Container>
  );
}
