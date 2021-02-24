import React, { FC } from 'react';
import styles from './styles.module.css';

type Props = {
  children: string;
};

export const Title: FC<Props> = ({ children }: Props) => (
  <>
    <h1 className={styles.title}>{children}</h1>
  </>
);
