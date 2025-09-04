# React Starter

## Environment

- React Version: 18.2.0
- Node Version: 18(LTS)
- Default Port: 8000

## [Change]: Project Specifications

```text
Note: Add your project specific Read only files below.
Functionality Requirements:
1.
Initial State of the project:
The form should have input fields for:
Name (required)
Email (required, valid email format) : Ex: test@email.com, is a valid email.
Experience (required, numeric input).
Input fields must be initially empty.
2.
Preview Functionality:
After filling the form, users can click the Preview button to review their inputs.
The preview should display the entered name, email, and experience.
3.
Clear Functionality:
In the preview, clicking the Clear button should take the user back to the form, with all the previously entered values cleared.
Validation:
Display the following error message if:
Name is empty: "Name is required."
Email is empty or invalid: "Enter a valid email address."
Experience is not a positive integer: "Experience must be a positive number."
The Preview button should not perform any operation if any field is empty or invalid.
Submission:
Upon clicking the Submit button in the preview, show a success message indicating that the application was successfully submitted.
Reset and Home Functionality:
A Reset button in the form and Home button in the success message:
Should clear all inputs and error messages.
Return the user to the initial state of the application.
```

**Read Only Files**

- `src/App.test.js`

**Commands**

- run:

```bash
npm start
```

- install:

```bash
npm install
```

- test:

```bash
npm test
```