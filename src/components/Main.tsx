import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

function Main() {
  const [page, setPage] = useState('Error changing content.');
  const changeContent: (param: string) => void = content => { setPage(content); };

  return (
    <div className=" d-flex container-fluid min-vh-100 p-0" id="app-surface">
      <Sidebar update={changeContent} />
      <Content page={page} />
    </div>
  );
}

export default Main;
