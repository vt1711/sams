import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import ViewRecords from './components/viewrecords/ViewRecords'
import UpdateRecords from './components/updaterecords/UpdateRecords'
import AddForm from './components/updaterecords/addform/AddForm';
import UpdateExistingRecords from './components/updaterecords/exisistingrecords/UpdateExistingRecords';
import Login from './components/login/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="viewrecords" element={<ViewRecords />} />
        <Route path="updaterecords" element={<UpdateRecords />}>
          <Route path="updateexisting" element={<UpdateExistingRecords/> } />
          <Route path="addnew" element={<AddForm />} />
        </Route>



      </Routes>
    </>
  );
}

export default App;
