const express = require('express');
const router = express.Router();

const {
  submitContact,
  getAllContacts,
  getContactById,
  updateContactStatus
} = require('../controllers/contactController');

// Basic check
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Contact API is working',
    endpoints: {
      submit: 'POST /api/contact/submit',
      all: 'GET /api/contact/all',
      byId: 'GET /api/contact/:id',
      status: 'PATCH /api/contact/:id/status'
    }
  });
});

// Public
router.post('/submit', submitContact);

// Admin
router.get('/all', getAllContacts);
router.get('/:id', getContactById);
router.patch('/:id/status', updateContactStatus);

module.exports = router;
