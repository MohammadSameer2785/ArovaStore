const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['farmer', 'consumer'],
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    state: String,
    district: String,
    village: String,
    pincode: String
  },
  upiId: {
    type: String,
    default: 'mdsameer@okaxis'
  },
  upiQrCode: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

export default User;