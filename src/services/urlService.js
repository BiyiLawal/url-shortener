import URL from '../models/urlModel.js';
import { nanoid } from 'nanoid';

export const createShortUrl = async (originalUrl) => {
  const shortCode = nanoid(7);
  const newUrl = await URL.create({ originalUrl, shortCode });
  return newUrl;
};

export const getOriginalUrl = async (shortCode) => {
  const urlRecord = await URL.findOne({ shortCode });
  if (urlRecord) {
    urlRecord.accessCount += 1;
    await urlRecord.save();
  }
  return urlRecord;
};

export const updateUrl = async (shortCode, newUrl) => {
  const urlRecord = await URL.findOneAndUpdate(
    { shortCode },
    { originalUrl: newUrl },
    { new: true }
  );
  return urlRecord;
};

export const deleteUrl = async (shortCode) => {
  const result = await URL.findOneAndDelete({ shortCode });
  return result;
};