// import React from 'react'

// const Formhandler = () => {
//   return (
//  <form>
//     <label>Name:</label>
//     <input type='text' placeholder='enter your name'></input>
//     <label>Email:</label>
//     <input type="email" placeholder='enter your email'></input>
//     <label>Age:</label>
//     <input type="number" placeholder='enter your age'></input>
//     <label>Hobbies:</label>
//     <input type="text"></input>
//  </form>
//   )
// }

import React, { useState, useEffect, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";


function FormField({ label, children }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label><strong>{label}</strong></label>
      <br />
      {children}
    </div>
  );
}

function RegistrationForm({ onSubmitForm }) {
  const nameRef = useRef(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      age: "",
      hobbies: [""],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "hobbies",
  });

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const onSubmit = (data) => {
    onSubmitForm(data);
    reset();
    nameRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Name">
        <input
         
         {...register("name", { required: "Name is required" })}
         placeholder="Enter your name"
      
       
          ref={nameRef}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
      </FormField>

      <FormField label="Email">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format",
            },
          })}
          placeholder="Enter your email"
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </FormField>

      <FormField label="Age">
        <input
          type="number"
          {...register("age", {
            required: "Age is required",
            min: { value: 11, message: "Age must be above 10" },
          })}
          placeholder="Enter your age"
        />
        <p style={{ color: "red" }}>{errors.age?.message}</p>
      </FormField>

      <FormField label="Hobbies">
        {fields.map((field, index) => (
          <React.Fragment key={field.id}>
            <input
              {...register(`hobbies.${index}`)}
              placeholder={`Hobby ${index + 1}`}
              style={{ marginBottom: "5px" }}
            />
          </React.Fragment>
        ))}
        <button type="button" onClick={() => append("")}>Add Hobby</button>
      </FormField>

      <button type="submit">Submit</button>
    </form>
  );
}


function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
    setSubmittedData(data);
  };

  return (
    <>
      {/* <h2>Registration Form</h2> */}
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

export default App;
