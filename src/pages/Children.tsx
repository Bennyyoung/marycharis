import { useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import logo from '../data/img/logo.jpg';
import html2canvas from 'html2canvas';

interface FormValues {
  name: string;
  location: string;
  phone_number: string;
  entry_no: string;
}

const Talent: React.FC = () => {
  const [state, handleSubmit] = useForm("mqknpeln");
  const [registerData, setRegisterData] = useState<FormValues>({
    name: "",
    location: "",
    phone_number: "",
    entry_no: "",
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  if (state.succeeded) {
    return (
      <div>
        <div className="container">
          <div style={{ border: '2px solid black', backgroundColor: 'rgb(206, 95, 252)', margin: '3rem', padding: '3rem' }}>
            <h2 style={{ color: 'white' }}>Thank You For Your Submission</h2>
            <button className="btn waves-effect waves-light"><Link style={{ textDecoration: 'none', color: 'white', }} to="/"><span className="material-icons">Return Home</span></Link></button>
          </div>
        </div>
        <EventCard registerData={registerData} />
      </div>
    )
  }

  return (
    <div className="container">
      <div className="col s12 m6 l5" style={{ marginTop: '20px' }}>
        <div className="row">
          <h4 style={{ textAlign: 'center' }}>Register for the talent hunt</h4>
          <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              {/* Rest of the code remains unchanged */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Talent;

interface EventCardProps {
  registerData: FormValues;
}

const EventCard: React.FC<EventCardProps> = ({ registerData }) => {
  const cardStyle = {
    width: '400px',
    height: 'auto',
    backgroundColor: "#0954d6",
    color: "#fff",
    fontWeight: 500,
    padding: '2% 0%',
    margin: "2% auto",
  };

  const myDivRef = useRef<HTMLDivElement>(null);

  const handleDownloadImage = () => {
    html2canvas(myDivRef.current!).then(canvas => {
      const imgData = canvas.toDataURL();
      const link = document.createElement('a');
      link.download = 'image.png';
      link.href = imgData;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div>
      <div className="card" style={cardStyle} ref={myDivRef}>
        <img src={'https://cdn.pixabay.com/photo/2020/04/24/10/56/music-5086395__340.png'} alt="" className='talent-cover' />
        <div className='talent-logo'>
          <img src={logo} alt="" className='talent-img' />
          <p>MCF Talent Hunt</p>
        </div>


        <div className="card-body" style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
          <p className="card-text">Name: {registerData.name}</p>
          <p className="card-text">Location: {registerData.location}</p>
          <p className="card-text">Number: {registerData.phone_number}</p>
          <p className="card-text">Entry No: {registerData.entry_no}</p>
        </div>

      </div>

      <div style={{ display: 'grid', placeItems: "center", margin: "2% 0%" }}>
        <button onClick={handleDownloadImage} className="btn btn-success ">Download</button>
      </div>

    </div>
  );
};
