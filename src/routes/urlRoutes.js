import express from 'express';
import { shortenUrl, retrieveOriginalUrl, modifyUrl, removeUrl } from '../controllers/urlController.js';

const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/shorten/:shortCode', retrieveOriginalUrl);
router.put('/shorten/:shortCode', modifyUrl);
router.delete('/shorten/:shortCode', removeUrl);

export default router;