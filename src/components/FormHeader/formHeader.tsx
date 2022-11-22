import React from 'react';
import style from './formHeader.module.scss';

type Props = {
  title: string;
};
export const FormHeader: React.FC<Props> = ({title}) => {
  return (
    <>
      <h3 className={style.logo}>Logo</h3>
      <h5 className={style.subLogo}>sublogo</h5>
      <h1 className={style.title}>{title}</h1>
    </>
  );
};
