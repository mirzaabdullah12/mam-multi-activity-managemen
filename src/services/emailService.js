import emailjs from '@emailjs/browser';

// EmailJS Configuration - CONFIGURED ✅
const EMAILJS_CONFIG = {
  serviceId: 'service_pnwwtt9',
  templateId: 'template_ae9chj8',
  publicKey: 'yfdlwgzauoUsihXXg'
};

// Admin email where notifications will be sent
const ADMIN_EMAIL = 'mirxaabdullahmirxaabdullah@mail.com';

/**
 * Send email notification to admin when user submits a form
 * @param {Object} formData - The form data from user
 * @param {string} formType - Type of form ('quote' or 'contact')
 * @returns {Promise} - EmailJS send promise
 */
export const sendEmailToAdmin = async (formData, formType = 'quote') => {
  try {
    // Prepare email template parameters
    const templateParams = {
      form_type: formType === 'quote' ? 'Quote Request' : 'Contact Form',
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      selected_service: formData.service || 'N/A',
      message: formData.message,
      submission_date: new Date().toLocaleString('en-GB', {
        dateStyle: 'full',
        timeStyle: 'short'
      }),
      to_email: ADMIN_EMAIL,
      reply_to: formData.email
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

/**
 * Initialize EmailJS (optional - for better performance)
 */
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};
