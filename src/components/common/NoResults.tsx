import React from 'react';
import { NoResultsWrapper } from '../../assets/styles/common/NoResultsWrapper';

type Props = {
  children?: any;
  title: string;
};

const NoResults = ({ title, children }: Props) => {
  return (
    <NoResultsWrapper>
      <h2>{ title }</h2>
      <div className="icon-container">
        { children }
      </div>
    </NoResultsWrapper>
  );
};

export default NoResults;