import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import JobApplicationForm from "./components/JobApplicationForm";
import Preview from "./components/Preview";
import SuccessMessage from "./components/SuccessMessage";

const title = "Job Application Portal";

const App = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    experience: '',
  })

  const [error, setError] = useState({
    name: false,
    email: false,
    experience: false,
  })

  const [showPreview, setShowPreview] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  const handlePreview = (e) => {
    e.preventDefault();

    const newError = {
      name: user.name.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email),
      experience: !/^\d+$/.test(user.experience) || parseInt(user.experience) <= 0,
    };
    setError(newError);

    const hasError = Object.values(newError).some(Boolean);
    if (!hasError) {
      setShowPreview(true);
    }
  };


  const handleReset = () => {
    setUser({ name: '', email: '', experience: '' });
    setError({ name: false, email: false, experience: false });
    setShowPreview(false);
    setShowSuccess(false);
  };


  const handleSubmit = () => {
    setShowPreview(false);
    setShowSuccess(true);
  };



  return (
    <div className="App pt-30 ma-auto" data-testid="app">
      <h8k-navbar header={title}></h8k-navbar>
      {showSuccess ? (
        <SuccessMessage handleHome={handleReset} />
      ) : showPreview ? (
        <Preview user={user} handleSubmit={handleSubmit} handleReset={handleReset} />
      ) : (
        <JobApplicationForm
          user={user}
          setUser={setUser}
          error={error}
          handlePreview={handlePreview}
          handleReset={handleReset}
        />
      )}
    </div>
  );
};

export default App;
