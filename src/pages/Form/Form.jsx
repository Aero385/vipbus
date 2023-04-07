import React, {useState} from 'react';
import './Form.scss';
import { images } from '../../constants';

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numPeople, setNumPeople] = useState(1);
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to your server or process it in some other way.
    // You can access the form values using the state variables.
  };

  return (
    <div className='form'>
      <img src={images.headbg2} alt='photo'/>
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Make a Reservation</h2>
      <div className="form-group">
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <label htmlFor="full-name" className="form-label">
          Full Name
        </label>
      </div>
      <div className="form-group">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="email" className="form-label">
          Email
        </label>
      </div>
      <div className="form-group">
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        <label htmlFor="phone-number" className="form-label">
          Phone Number
        </label>
      </div>
      <div className="form-group">
        <input type="number" value={numPeople} onChange={(e) => setNumPeople(e.target.value)} required />
        <label htmlFor="num-people" className="form-label">
          Number of People
        </label>
      </div>
      <div className="form-group">
        <textarea value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} required></textarea>
        <label htmlFor="additional-info" className="form-label">
          Additional Information
        </label>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
    </div>
  );
}

export default Form;