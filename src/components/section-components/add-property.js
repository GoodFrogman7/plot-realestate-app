import React, { useState } from "react";

const initialState = {
  title: "",
  city: "",
  type: "rent",
  price: "",
  description: "",
  owner: "",
  images: [""]
};

export default function AddPropertyForm() {
  const [form, setForm] = useState(initialState);
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Validate required fields
    if (!form.title || !form.city || !form.type || !form.price || !form.description || !form.owner) {
      setSuccess("Please fill in all required fields.");
      return;
    }
    // Simulate property add
    setSuccess("Property submitted successfully! (Simulated)");
    setForm(initialState);
  }

  return (
    <div className="ps-5 pt-5 pb-5 me-5 mb-5 bg-white rounded">
      <h3 className="text-primary text-center mt-3 mb-5">
        <strong>Add New Property</strong>
      </h3>
      {success && <div className="alert alert-info">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label><strong>Title*</strong></label>
          <input className="form-control" name="title" value={form.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label><strong>City*</strong></label>
          <select className="form-control" name="city" value={form.city} onChange={handleChange} required>
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>
        <div className="mb-3">
          <label><strong>Type*</strong></label>
          <select className="form-control" name="type" value={form.type} onChange={handleChange} required>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
            <option value="sublease">Sublease</option>
          </select>
        </div>
        <div className="mb-3">
          <label><strong>Price (INR)*</strong></label>
          <input className="form-control" name="price" type="number" value={form.price} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label><strong>Description*</strong></label>
          <textarea className="form-control" name="description" value={form.description} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label><strong>Owner Name*</strong></label>
          <input className="form-control" name="owner" value={form.owner} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label><strong>Image URL</strong></label>
          <input className="form-control" name="images" value={form.images[0]} onChange={e => setForm({ ...form, images: [e.target.value] })} />
        </div>
        <div className="text-center mt-5 mb-3">
          <button className="btn btn-primary btn-md ms-2 ps-3 pe-3" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
