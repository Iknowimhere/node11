import React, { useState } from 'react';
import axios from './axios';
const defaultImage = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg";

function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('password', form.password);
      if (imageFile) {
        formData.append('image', imageFile);
      }
      console.log(formData);
      
      let res = await axios.post("/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2>Sign Up</h2>
      <div style={{ marginBottom: 12 }}>
        <label>Name</label><br />
        <input name="name" value={form.name} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Email</label><br />
        <input name="email" type="email" value={form.email} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Password</label><br />
        <input name="password" type="password" value={form.password} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Image</label><br />
        <input name="image" type="file" accept="image/*" onChange={handleImageChange} style={{ width: '100%' }} />
        {imageFile ? (
          <img src={URL.createObjectURL(imageFile)} alt="avatar" style={{ width: 60, height: 60, borderRadius: '50%', marginTop: 8 }} />
        ) : null}
      </div>
      <button type="submit" style={{ width: '100%', padding: 10, background: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}>Sign Up</button>
    </form>
  );
}

export default SignupForm;
