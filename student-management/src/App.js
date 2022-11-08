import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import StudentList from './components/StudentList';
import Header from './layout/Header';

function App() {
  const [students, setStudents] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<StudentList students={students} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
