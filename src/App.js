import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import ViewRecords from './components/viewrecords/ViewRecords'
import UpdateRecords from './components/updaterecords/UpdateRecords'
import AddForm from './components/updaterecords/addform/AddForm';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="viewrecords" element={<ViewRecords />} />
        <Route path="updaterecords" element={<UpdateRecords />}>
          <Route path="addnew" element={<AddForm />} />
        </Route>



      </Routes>
    </>
  );
}

export default App;
