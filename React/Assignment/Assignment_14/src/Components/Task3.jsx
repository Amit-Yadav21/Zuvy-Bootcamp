import React, { useState } from "react";

function Task3() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", submitted: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, submitted: true });
  };

  return (
    <div className="container">
      <h1>{formData.submitted ? `Hello ${formData.firstName} ${formData.lastName}` : "Hello"}</h1>
      {formData.submitted && <h1 style={{ fontSize: "20px" }}>{formData.email}</h1>}
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
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Task3;
