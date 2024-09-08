import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true },
//   customCode: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
  accessCount: { type: Number, default: 0 },
});

const URL = mongoose.model('URL', urlSchema);

export default URL;