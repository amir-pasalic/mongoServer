import mongoose from 'mongoose';

const StundetSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  yearOfBirth: Number,
  address: String
});

export default mongoose.model('Student', StundetSchema);
