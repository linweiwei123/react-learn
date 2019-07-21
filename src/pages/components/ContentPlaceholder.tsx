import * as React from 'react';

interface IPlaceholder {
  pageName: string
}

const ContentPlaceholder = ({ pageName }: IPlaceholder) => {
  return (
    <h1>This is { pageName } ！</h1>
  )
};

export default ContentPlaceholder;