
import React,{useState} from "react";
import RegistrationForm from "./components/RegistrationForm"

import './App.css'
import UserCard from './usercard'
import Formhandler from './components/RegistrationForm'
export default function App() {
  const [submittedData,setSubmittedData] = useState(null);
  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
    setSubmittedData(data);
  };

// const [showprofile,setShowprofile]=useState(true)
// const user={
//   name:"Nikhil",
//   age:23,
//   location:"Macherla"
// }
return (
//   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//   <button
//     onClick={() => setShowprofile(!showprofile)}
//     className="mb-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//   >
//     {showprofile ? "Hide Profile" : "Show Profile"}
//   </button>

//   {showprofile && <UserCard {...user} />}
// </div>
// {/* <Formhandler /> */}
<>
<h2>Registration Form</h2>
<RegistrationForm onSubmitForm={handleFormSubmit} />

{submittedData && (
  <>
    <h3>Hobbies List:</h3>
    <ul>
      {submittedData.hobbies.map((hobby, idx) => (
        <li key={`${hobby}-${idx}`}>{hobby}</li>
      ))}
    </ul>
  </>
)}
</>

  );
}

// export default App
