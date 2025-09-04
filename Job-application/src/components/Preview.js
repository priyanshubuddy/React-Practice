import React from "react";

const Preview = ({user, handleSubmit, handleReset}) => {
  return (
    <div data-testid="preview">
      <h2>Preview Your Application</h2>
      <p data-testid="preview-name">
        <strong>Name:</strong> {user?.name}
      </p>
      <p data-testid="preview-email">
        <strong>Email:</strong> {user?.email}
      </p>
      <p data-testid="preview-experience">
        <strong>Experience:</strong> {user?.experience} years
      </p>
      <button data-testid="clear-button" onClick={handleReset}>Clear</button>
      <button data-testid="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Preview;
