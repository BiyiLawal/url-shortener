import { createShortUrl, getOriginalUrl, updateUrl, deleteUrl } from '../services/urlService.js';

export const shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  try {
    const newUrl = await createShortUrl(originalUrl);
    res.status(201).json(newUrl);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const retrieveOriginalUrl = async (req, res) => {
  const { shortCode } = req.params;
  try {
    const urlRecord = await getOriginalUrl(shortCode);
    if (urlRecord) {
      res.status(200).json(urlRecord);
    } else {
      res.status(404).json({ message: 'Short URL not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const modifyUrl = async (req, res) => {
  const { shortCode } = req.params;
  const { url } = req.body;
  try {
    const updatedUrl = await updateUrl(shortCode, url);
    if (updatedUrl) {
      res.status(200).json(updatedUrl);
    } else {
      res.status(404).json({ message: 'Short URL not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeUrl = async (req, res) => {
  const { shortCode } = req.params;
  try {
    const deleted = await deleteUrl(shortCode);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Short URL not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};