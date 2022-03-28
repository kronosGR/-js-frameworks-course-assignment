import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

import styles from '../styles/Country.module.css';

const Country = ({ name, imgUrl }) => {
  return (
    <Link href={`/detail/${name}`}>
      <a>
        <Card className={styles.container}>
          <Image
            src={imgUrl}
            alt={name}
            width={200}
            height={150}
            className={{ objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </a>
    </Link>
  );
};

export default Country;
