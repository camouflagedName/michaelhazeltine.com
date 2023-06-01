import { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function Main() {
  const [page, setPage] = useState('Error changing content.');
  const changeContent: (param: string) => void = content => setPage(content);

  return (
    <div className="d-flex flex-column flex-sm-row vh-100 p-0" id="app-surface">
      <Sidebar update={changeContent} title={page}/>
      <div className="container-fluid p-0" style={{ overflow: "auto" }}>
        <h1 className="app-text bg-dark text-center py-2 mb-3 d-none d-sm-block">{page}</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
