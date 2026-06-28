const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_PATTERN = /^[\p{L}\s'.-]+$/u;

export function validateContactForm({ name, email, message }) {
  const errors = {};

  const trimmedName = name.trim();
  if (!trimmedName) {
    errors.name = "Name is required.";
  } else if (trimmedName.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (trimmedName.length > 80) {
    errors.name = "Name must be 80 characters or fewer.";
  } else if (!NAME_PATTERN.test(trimmedName)) {
    errors.name = "Name can only contain letters, spaces, hyphens, and apostrophes.";
  }

  const trimmedEmail = email.trim();
  if (!trimmedEmail) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = "Enter a valid email address.";
  } else if (trimmedEmail.length > 254) {
    errors.email = "Email must be 254 characters or fewer.";
  }

  const trimmedMessage = message.trim();
  if (!trimmedMessage) {
    errors.message = "Message is required.";
  } else if (trimmedMessage.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (trimmedMessage.length > 2000) {
    errors.message = "Message must be 2000 characters or fewer.";
  }

  return errors;
}
