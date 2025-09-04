import React, { useState } from "react";

const JobApplicationForm = ({user, setUser, error, handlePreview, handleReset}) => {

  return (
    <form data-testid="job-application-form" className="layout-column ml-auto">
      <h2 className="ma-auto pa-20">Provide your details</h2>
      <div>
        <label className="font-weight-bold">
          Name:
          <input
            data-testid="input-name"
            type="text"
            name="name"
            value={user.name}
            className="pa-10 ml-120"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </label>
        {error?.name &&
          <p data-testid="error-name" className="error">
            Name is required.
          </p>
        }
      </div>
      <div>
        <label className="font-weight-bold">
          Email:
          <input
            data-testid="input-email"
            type="email"
            name="email"
            value={user.email}
            className="pa-10 ml-120"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>
        {error?.email &&
          <p data-testid="error-email" className="error">
            Enter a valid email address.
          </p>
        }
      </div>
      <div>
        <label className="font-weight-bold">
          Experience (years):
          <input
            data-testid="input-experience"
            type="text"
            name="experience"
            value={user.experience}
            className="pa-10 ml-20"
            onChange={(e) => setUser({ ...user, experience: e.target.value })}
          />
        </label>
        {error?.experience &&
          <p data-testid="error-experience" className="error">
            Experience must be a positive number.
          </p>
        }
      </div>
      <div className="ml-100">
        <button data-testid="preview-button" type="submit" onClick={handlePreview} className="mx-50">
          Preview
        </button>
        <button data-testid="reset-button" type="button" onClick={handleReset} className="mx-50">
          Reset
        </button>
      </div>
    </form>
  );
};

export default JobApplicationForm;
