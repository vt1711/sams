import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import ViewRecords from './components/viewrecords/ViewRecords'
import UpdateRecords from './components/updaterecords/UpdateRecords'
import AddForm from './components/updaterecords/addform/AddForm';
import UpdateExistingRecords from './components/updaterecords/exisistingrecords/UpdateExistingRecords';
import Login from './components/login/Login';
import PieChart from './components/recordstable/piechart/PieChart'
import RecordsTable from './components/recordstable/RecordsTable'
import Errorpage from './components/errorpages/Errorpage';
import unauthorizedimg from './components/errorpages/unauthorizedimg.png'
import error404img from './components/errorpages/error404img.png'
import Logout from './components/logout/Logout';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout/>} />


        <Route path="viewrecords" element={<ViewRecords />}>
          <Route path="listview" element={<RecordsTable />} />
          <Route path="graphicalview" element={<PieChart />} />
        </Route>

        <Route path="updaterecords" element={<UpdateRecords />}>
          <Route path="updateexisting" element={<UpdateExistingRecords />} />
          <Route path="addnew" element={<AddForm />} />
        </Route>

        <Route path="/unauthorized"
               element={<Errorpage
                          imgsrc={unauthorizedimg}
                          errorname="401"
                          errormessage="Unauthorized access . kindly login"
                          errorbtntext="Login"
                        />
                       } 
        />
        <Route path="*"
               element={<Errorpage
                          imgsrc={error404img}
                          errorname="404"
                          errormessage="Page not found . Go to Home"
                          errorbtntext="Home"
                         />
                        } 
        />

      </Routes>
    </>
  );
}

export default App;
