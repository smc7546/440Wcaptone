import React from 'react';
import './Cards.css';
import Popup from 'reactjs-popup';
import Dropdown from 'react-bootstrap/Dropdown';

const Cards = () => {



  return (
    <div className='cards'>
      <div className='cards-container'>
        <div className='card-wrapper'>
          <div className='card-items'>

            <div className='headers-first'>
              <img className='green-img' src='./greenCheck.png' alt='goodsymbol' />
              <h1 className='home-tittle'> Active Prescriptions </h1>
            </div>
            <div className='border-bottom'> </div>

            <div className='card-item'>
              <div className='left-body'>
                <img className='li40-img' src='./li40.png' alt='lidex40mg'/>

                <Popup
                  trigger={<button1>Renew</button1>}
                  position="center"
                  modal nested>
                  {
                    close => (
                      <div className='popup-container'>
                        <div className='pharmacy-info'>
                          <h3 className="pharm-header"> Select Pharmacy to Pick Up Prescription From: < /h3>
                          <Dropdown>
                            <Dropdown.Toggle variant="Secondary" id="pharm-dropdown">
                              Pharmacy:
                            < /Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>440W IST Dr, State College, PA, 11111 < /Dropdown.Item>
                              <Dropdown.Item>Unavailable Location Dr, State College, PA, 12211 < /Dropdown.Item>
                            < /Dropdown.Menu>
                          < /Dropdown>
                          <div className="available">
                            <img img className='green-img' src='./greenCheck.png' alt='goodsymbol'/ >
                            <p1 className="available-loc"> Prescription is in stock at selected location < /p1>
                          < /div>
                        < /div>
                        <div className="button-spacing">
                          <button4 onClick= { () => close() } > Cancel < /button4>
                          <button5> Continue < /button5>
                        < /div>
                      < /div>
                    )
                  }
                < /Popup>
              </div>

              <div className='card-body'>
                <h3 className='card-tittle'> Lidexamfetamine Dimesylate (generic Vyvanse) </h3>
                <p className='small-info'> 40 mg, 30 capsules </p>

                <Popup
                  trigger={<button7>Refill</button7>}
                  position="center"
                  modal nested>
                  {
                    close => (
                      <div className='popup-container'>
                        <div className='pharmacy-info'>
                          <h3 className="refill-header"> Would you like to request a 30 day refill for Lidexamfetamine Dimesylate (generic Vyvanse) 40 mg? < /h3>
                        < /div>
                        <div className="button-spacing">
                          <button4 onClick= { () => close() } > Cancel < /button4>
                          <button8 onClick= { () => close() } > Yes < /button8>
                        < /div>
                      < /div>
                    )
                  }
                < /Popup>

              </div>
              <img className='card-button' img src='./popoutIcon.png' alt='popoutIcon'/>

            </div>

            <div className='headers'>
              <img className='warning-img' src='./warning.png' alt='warningsymbol' />
              <h1 className='home-tittle'> Pending Approval Prescriptions </h1>
            </div>
            <div className='border-bottom'> </div>

            <div className='card-item'>
              <div className='left-body'>
                <img className='odan4mg-img' src='./odan4mg.png' alt='odan4mg'/>
                <button6 type="renewInvalid">Renew < /button6>
              </div>

              <div className='card-body'>
                <h3 className='card-tittle'> Ondansetron (generic Zofran) </h3>
                <p className='small-info'> 4 mg, 20 tablets </p>
                <button3 type="refillInvalid">Refill < /button3>
              </div>
              <img className='card-button' img src='./popoutIcon.png' alt='popoutIcon'/>
            </div>

            <div className='headers'>
              <img className='error-img' src='./error.png' alt='errorsymbol' />
              <h1 className='home-tittle'> Expired Prescriptions </h1>
            </div>

            <div className='border-bottom'> </div>

            <div className='card-item'>
              <div className='left-body'>
                <img className='tac01-img' src='./tac.png' alt='tac0.1'/>

                <Popup
                  trigger={<button1>Renew</button1>}
                  position="center"
                  modal nested>
                  {
                    close => (
                      <div className='popup-container'>
                        <div className='pharmacy-info'>
                          <h3 className="pharm-header"> Select Pharmacy to Pick Up Prescription From: < /h3>
                          <Dropdown>
                            <Dropdown.Toggle variant="Secondary" id="pharm-dropdown">
                              Select Pharmacy:
                            < /Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>440W IST Dr, State College, PA, 11111 < /Dropdown.Item>
                              <Dropdown.Item>Unavailable Location Dr, State College, PA, 12211 < /Dropdown.Item>
                            < /Dropdown.Menu>
                          < /Dropdown>
                          <div className="available">
                            <img img className='green-img' src='./greenCheck.png' alt='goodsymbol'/ >
                          < /div>
                        < /div>
                        <div className="button-spacing">
                          <button4 onClick= { () => close()} > Cancel < /button4>
                          <button5> Continue < /button5>
                        < /div>
                      < /div>
                    )
                  }
                < /Popup>
              </div>

              <div className='card-body'>
                <h3 className='card-tittle'>  Tacrolimus Ointment 0.1% (generic Prograf)</h3>
                <p className='small-info'> 0.1 %, 30 grams </p>
                <button3 type="refillInvalid">Refill < /button3>
              </div>
              <img className='card-button' img src='./popoutIcon.png' alt='popoutIcon'/>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;