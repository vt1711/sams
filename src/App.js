import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import ViewRecords from "./components/viewrecords/ViewRecords";
import UpdateRecords from "./components/updaterecords/UpdateRecords";
import AddForm from "./components/updaterecords/addform/AddForm";
import UpdateExistingRecords from "./components/updaterecords/exisistingrecords/UpdateExistingRecords";
import Login from "./components/login/Login";
import PieChart from "./components/recordstable/piechart/PieChart";
import RecordsTable from "./components/recordstable/RecordsTable";
import Errorpage from "./components/errorpages/Errorpage";
import unauthorizedimg from "./components/errorpages/unauthorizedimg.png";
import error404img from "./components/errorpages/error404img.png";
import Logout from "./components/logout/Logout";
import { createContext } from "react";
import { useReducer } from "react";
import { initialState,reducer } from "./reducer/UseReducer";
import Features from "./components/features/Features";


export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/features" element={<Features />} />

      <Route path="viewrecords" element={<ViewRecords />}>
        <Route path="listview" element={<RecordsTable />} />
        <Route path="graphicalview" element={<PieChart />} />
      </Route>

      <Route path="updaterecords" element={<UpdateRecords />}>
        <Route path="updateexisting" element={<UpdateExistingRecords />} />
        <Route path="addnew" element={<AddForm />} />
      </Route>

      <Route
        path="/unauthorized"
        element={
          <Errorpage
            imgsrc={unauthorizedimg}
            errorname="401"
            errormessage="Unauthorized access . kindly login"
            errorbtntext="Login"
          />
        }
      />
      <Route
        path="*"
        element={
          <Errorpage
            imgsrc={error404img}
            errorname="404"
            errormessage="Page not found . Go to Home"
            errorbtntext="Home"
          />
        }
      />
    </Routes>
  );
};

const App = () => {

  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
      <Navbar />
      <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;
