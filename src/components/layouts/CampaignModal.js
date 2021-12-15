import React from 'react';

const CampaignModal = () => {
  return (
    <div id='donateprop' className='modal'>
      <div className='modal-content'>
        <script
          src='https://donorbox.org/widget.js'
          paypalexpress='false'
        ></script>
        <iframe
          title='donate'
          allowpaymentrequest=''
          frameBorder='0'
          height='700px'
          name='donorbox'
          scrolling='no'
          seamless='seamless'
          src='https://donorbox.org/embed/tifc-lahore-winter-project?default_interval=o'
          width='100%'
        ></iframe>
      </div>
      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect waves-green btn-flat'>
          Close
        </a>
      </div>
    </div>
  );
};

export default CampaignModal;
