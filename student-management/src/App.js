import { Route, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';

import StudentList from './components/StudentList';
import Header from './layout/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main container">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
