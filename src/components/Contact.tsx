import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      alert('Contact form functionality coming soon!');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>

          <h3>Email: ashissardar7003@gmail.com</h3>

          <h3>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/ashiskumarsardar/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}linkedin.com/in/ashiskumarsardar
            </a>
          </h3>

          <p>
            Open to AI/ML Engineering opportunities, GenAI projects,
            collaborations, freelance work, and innovative startup ideas.
          </p>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="visitor-name"
                label="Visitor Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />

              <TextField
                required
                id="visitor-contact"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError
                    ? 'Please enter your email or phone number'
                    : ''
                }
              />
            </div>

            <TextField
              required
              id="visitor-message"
              label="Message"
              placeholder="Send me any inquiries, opportunities, or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter a message' : ''}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send Message
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;