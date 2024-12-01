const express = require('express');
const { updateEmailSettings, getEmailSettings, kestraWebhook } = require('../controllers/email');
const protect = require('../middleware/auth');

const router = express.Router();

// Route to fetch email settings
router.get('/email-settings', protect, getEmailSettings);

// Route to update email settings
router.post('/email-settings', protect, updateEmailSettings);

router.post('/kestra-webhook', kestraWebhook)

module.exports = router;
