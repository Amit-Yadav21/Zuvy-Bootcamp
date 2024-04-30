import React, { useState } from "react";

function Task2() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", submitted: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, submitted: true });
  };

  return (
    <div className="container">
      <h1>{formData.submitted ? `${formData.firstName} ${formData.lastName}` : "Hello"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Task2;
