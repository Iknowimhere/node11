// user.model.js (ES Module)
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: [true,"name field is required"] },
  email: { type: String, required: [true,"email field is required"], unique: true },
  password: { type: String, required: true },
  image: { type: String,default:"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg" }, 
}, {
  timestamps: true
});

const User = model('User', userSchema);

export default User;
