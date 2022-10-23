import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

import InputField from '../common/InputText';
import TextareaField from '../common/TextareaField';
import Button from '../common/Button';

const ContactUs = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    content: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      // Service_id: service_6q3cbie, Template_id: template_9jitzpe, Public_key: FsX1q7kKF4YH8G3N5
      .send('service_6q3cbie', 'template_9jitzpe', values, 'FsX1q7kKF4YH8G3N5')
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setValues({
            fullName: '',
            email: '',
            content: '',
          });
          setStatus('SUCCESS');
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <InputField
          value={values.email}
          handleChange={handleChange}
          label="Mail to: "
          name="email"
          type="email"
          placeholder="Input email address"
        />
        <InputField
          value={values.fullName}
          handleChange={handleChange}
          label="Full Name: "
          name="fullName"
          type="text"
          placeholder="Hop Nguyen"
        />
        <TextareaField
          value={values.content}
          handleChange={handleChange}
          label="Your content here"
          name="content"
        />

        <Button type="submit" />
      </form>
    </div>
  );
};

const renderAlert = () => (
  <div>
    <p>Your content submitted successfully!</p>
  </div>
);

export default ContactUs;
