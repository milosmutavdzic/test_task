import React from 'react';

import './Loader.scss';

const Loader = () => (
  <article className="loader-wrapper">
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </article>
);

export default Loader;
