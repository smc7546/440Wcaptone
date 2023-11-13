import React, { Component } from 'react';
import useRef from 'react';
import useState from 'react';
import Select from 'react-select';
import SelectInstance from 'react-select';
import StylesConfig from 'react-select';
import './Cards.css';
import Popup from 'reactjs-popup';
import chroma from 'chroma-js';
import Dropdown from 'react-bootstrap/Dropdown';
import CreatableSelect from 'react-select';

export default class Cards extends Component {
  constructor(props){
      super(props)
      this.state = {
        selectOptions : [],
        img: "",
        message: '',
        label: ''
      }
  }

 async getOptions(){
  const pharmaOptions = [
    { value: "", label: "Select a Pharmacy", color: "#bcbcbc", img: "", message: "" },
    { value: "available", label: "Available pharm, 123 ave, Pittsburgh, PA, 11111", color: "#75ca50", img: "./greenCheck.png", message: "Prescription is in stock at selected location"},
    { value: "lowStock", label: "Low Stock pharm, 456 dr, Pittsburgh, PA, 22222", color: "#f2a351", img: "./warning.png", message: "Prescription is running low at selected location, it could take up to 2-3 days to refill your prescription."},
    { value: "unavailable", label: "Out of Stock pharm, 789 ln, Pittsburgh, PA, 33333", color: "#f44336", img: "./error.png", message: "Prescription is out of stock at selected location, it will take up to 3 days to refill your prescription."}
  ];

  this.setState({selectOptions: pharmaOptions})
 }

  handleChange = (e) => {
     //const { data, value } = event.target
     //setData({...data, label: value })
     this.setState({img:e.img, message:e.message})
  }

  componentDidMount(){
     this.getOptions()
  }

  render() {
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
                  closeOnDocumentClick
                  modal >
                  {
                    close => (
                      <div className='popup-container'>
                        <div className='pharmacy-info'>
                          <h3 className="pharm-header"> Select Pharmacy to Pick Up Prescription From: < /h3>
                            <Select className="pharm-dropdown" onChange={this.handleChange.bind(this)}
                              defaultValue={this.state.selectOptions[0]}
                              options={this.state.selectOptions}
                              theme={(theme) => ({
                                ...theme,
                                borderRadius: 5,
                                colors: {
                                  ...theme.colors,
                                  primary50: "#d5c0d7",
                                  primary25: '#b997bd',
                                  primary: '#742F7C',
                                },
                              })}
                            />
                          <div className="available">
                            <img className='green-img' src={this.state.img} alt='' />
                            <p1 className="available-loc"> {this.state.message} < /p1>
                          < /div>
                        < /div>

                        <Popup
                          trigger={<button13> Continue </button13>}
                          position="center"
                          closeOnDocumentClick
                          modal >
                          {
                            close => (
                              this.state.message='',
                              this.state.img='',
                              <div className="req-sent">
                                <img className='req-img' src='./greenCheck.png' alt='goodsymbol' />
                                <h9 className="req-text">Your renewal request has been submitted.< /h9>
                              < /div>
                            )
                          }
                        < /Popup>
                        <div className="button-spacing">
                          <button12 onClick= {
                             () => close(
                               this.state.message='',
                               this.state.img=''
                             )
                          } > Cancel < /button12>
                        < /div>
                      < /div>
                    )
                  }
                < /Popup>
              </div>

              <div className='card-body'>
                <h3 className='card-tittle'> Lisdexamfetamine Dimesylate (generic Vyvanse) </h3>
                <p className='small-info'> 40 mg, 30 capsules </p>

                <Popup
                  trigger={<button7>Refill</button7>}
                  position="center"
                  closeOnDocumentClick
                  modal >
                  {
                    close => (
                      <div className='popup-container'>
                        <div className='refill-info'>
                          <h3 className="refill-header">Would you like to request a 30 day refill for Lisdexamfetamine Dimesylate (generic Vyvanse) 40 mg? < /h3>
                        < /div>

                        <div className="button-spacing">
                          <button4 onClick= { () => close() } > Cancel < /button4>
                          <Popup
                            trigger={<button8> Yes </button8>}
                            position="center"
                            modal nested>
                            {
                              close => (
                                <div className="req-sent">
                                  <img className='req-img' src='./greenCheck.png' alt='goodsymbol' />
                                  <h9 className="req-text">Your refill request has been submitted.< /h9>
                                < /div>
                              )
                            }
                          < /Popup>
                        < /div>
                      < /div>
                    )
                  }
                < /Popup>

              </div>
              <Popup
                trigger={<img className='card-button' img src='./popoutIcon.png'>< /img> }
                position="center"
                modal nested>
                {
                  close => (
                    <div className="popup-container-more-info">
                      <div>
                        <img className='li40-more-info' src='./li40.png' alt='lidex40mg'/>
                      < /div>
                      <h5 className="more-info-header">Lisdexamfetamine Dimesylate (generic Vyvanse) < /h5>
                      <p className='more-info-dose'> 40 mg, 30 capsules </p>
                      <div className="more-info-minis-container" >
                        <div className="more-info-minis">
                          <div className="more-info-mini">
                            <img className='mini-pill-img'  src='./pillIcon.png' alt="pill" />
                            <h6>40 mg< /h6>
                            <h7>Daily Dosage< /h7>
                          < /div>
                          <div className="more-info-mini">
                            <img className="mini-clock-img" src="./clockIcon.png" alt="clock" />
                            <h6>1 x Pills< /h6>
                            <h7>Each Day< /h7>
                          < /div>
                          <div className="more-info-mini">
                            <img className="mini-dr-img" src="./drIcon.png" alt="dr" />
                            <h6>Dr Firstname Lastname< /h6>
                            <h7>0 Refills Left< /h7>
                          < /div>
                          <div className="more-info-about" >
                            <body>
                              <h8>About Drug < /h8>
                              <body> Lisdexamfetamine dimesylate is used to treat attention deficit hyperactivity disorder (ADHD) in adults and children 6 years of age and older. This medicine is also used to treat moderate to severe binge eating disorder (BED). It belongs to the group of medicines called central nervous system (CNS) stimulants. < /body>
                              <body> Lisdexamfetamine dimesylate increases attention and decreases restlessness in children and adults who are overactive, cannot concentrate for very long, or are easily distracted and impulsive. This medicine is used as part of a total treatment program that also includes social, educational, and psychological treatment.< /body>
                              <h8>More Information < /h8>
                              <ul>
                                <li><a className="a1" alt="mayoClinic" href="https://www.mayoclinic.org/drugs-supplements/lisdexamfetamine-dimesylate-oral-route/description/drg-20070888" target="_blank"> Mayo Clinic< /a>< /li>
                                <li><a className="a1" alt="goodrx" href="https://www.goodrx.com/vyvanse/what-is" target="_blank">GoodRx< /a>< /li>
                              < /ul>
                            < /body>
                            <button10>Message Prescriber< /button10>
                            <button11>Refill< /button11>
                          < /div>
                        < /div>
                      < /div>
                    < /div>
                  )
                }
              < /Popup>

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
              < /div>

              <Popup
                trigger={<img className='card-button' img src='./popoutIcon.png'>< /img> }
                position="center"
                modal >
                {
                  close => (
                    <div className="popup-container-more-info">
                      <div>
                        <img className='odan4mg-more-info' src='./odan4mg.png' alt='odan4mg'/>
                      < /div>
                      <h5 className="more-info-header">Ondansetron (generic Zofran) < /h5>
                      <p className='more-info-dose'> 4 mg, 20 tablets </p>
                      <div className="more-info-minis-container" >
                        <div className="more-info-minis">
                          <div className="more-info-mini">
                            <img className='mini-pill-img'  src='./pillIcon.png' alt="pill" />
                            <h6>4 mg< /h6>
                            <h7>Daily Dosage< /h7>
                          < /div>
                          <div className="more-info-mini">
                            <img className="mini-clock-img" src="./clockIcon.png" alt="clock" />
                            <h6>1 x Pills< /h6>
                            <h7>Each Day< /h7>
                          < /div>
                          <div className="more-info-mini">
                            <img className="mini-dr-img" src="./drIcon.png" alt="dr" />
                            <h6>Dr Firstname Lastname< /h6>
                            <h7>2 Refills Left< /h7>
                          < /div>
                          <div className="more-info-about" >
                            <body>
                              <h8>About Drug < /h8>
                              <body>Ondansetron is used to prevent nausea and vomiting that is caused by cancer medicines (chemotherapy) or radiation therapy. It is also used to prevent nausea and vomiting that may occur after surgery. Ondansetron works in the stomach to block the signals to the brain that cause nausea and vomiting.< /body>
                              <body>This medicine is available only with your doctor's prescription. < /body>
                              <h8>More Information < /h8>
                              <ul>
                                <li><a className="a1" alt="mayoClinic" href="https://www.mayoclinic.org/drugs-supplements/ondansetron-oral-route-oromucosal-route/description/drg-20074421" target="_blank"> Mayo Clinic< /a>< /li>
                                <li><a className="a1" alt="goodrx" href="https://www.goodrx.com/ondansetron/what-is" target="_blank">GoodRx< /a>< /li>
                              < /ul>
                            < /body>
                            <button10>Message Prescriber< /button10>
                            <button11>Refill< /button11>
                          < /div>
                        < /div>
                      < /div>
                    < /div>
                  )
                }
              < /Popup>

          < /div>

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
                  modal >
                  {
                    close => (
                      <div className='popup-container'>
                        <div className='pharmacy-info'>
                          <h3 className="pharm-header"> Select Pharmacy to Pick Up Prescription From: < /h3>
                            <Select className="pharm-dropdown" onChange={this.handleChange.bind(this)}
                              defaultValue={this.state.selectOptions[0]}
                              options={this.state.selectOptions}
                              theme={(theme) => ({
                                ...theme,
                                borderRadius: 5,
                                colors: {
                                  ...theme.colors,
                                  primary50: "#d5c0d7",
                                  primary25: '#b997bd',
                                  primary: '#742F7C',
                                },
                              })}
                            />
                          <div className="available">
                            <img img className='green-img' src={this.state.img} alt=''/ >
                            <p1 className="available-loc"> {this.state.message} < /p1>
                          < /div>
                        < /div>

                        <div className="button-spacing">
                          <button12 onClick= {
                            () => close(
                              this.state.message='',
                              this.state.img=''
                            )
                          } > Cancel < /button12>

                          <Popup
                            trigger={<button13> Continue </button13>}
                            position="center"
                            modal >
                            {
                              close => (
                                this.state.message='',
                                this.state.img='',
                                <div className="req-sent">
                                  <img className='req-img' src='./greenCheck.png' alt='goodsymbol' />
                                  <h9 className="req-text">Your renewal request has been submitted.< /h9>
                                < /div>
                              )
                            }
                            < /Popup>
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
              < /div>

              <Popup
                trigger={<img className='card-button' img src='./popoutIcon.png'>< /img> }
                position="center"
                modal >
                {
                  close => (
                    <div className="popup-container-more-info">
                      <div>
                        <img className='tac01-more-info' src='./tac.png' alt='tac01'/>
                      < /div>
                      <h5 className="more-info-header">Tacrolimus Ointment 0.1% (generic Prograf)< /h5>
                      <p className='more-info-dose'> 0.1%, 30 grams </p>
                      <div className="more-info-minis-container" >
                        <div className="more-info-minis">
                          <div className="more-info-mini">
                            <img className='mini-pill-img'  src='./pillIcon.png' alt="pill" />
                            <h6>Apply Small Amount to Affected Area < /h6>
                            <h7>Per Use< /h7>
                          < /div>
                          <div className="more-info-mini">
                            <img className="mini-clock-img" src="./clockIcon.png" alt="clock" />
                            <h6>Every 12 Hours< /h6>
                            <h7>Each Day< /h7>
                          < /div>
                          <div className="more-info-mini">
                            <img className="mini-dr-img" src="./drIcon.png" alt="dr" />
                            <h6>Dr Firstname Lastname< /h6>
                            <h7>0 Refills Left< /h7>
                          < /div>
                          <div className="more-info-about" >
                            <body>
                              <h8>About Drug < /h8>
                              <body>Tacrolimus topical is used on the skin to treat moderate to severe atopic dermatitis in patients who have received other medicines that have not worked well. Atopic dermatitis is a skin condition where there is itching, redness, and inflammation, much like an allergic reaction. Tacrolimus helps to suppress these symptoms which are reactions caused by the body's immune system. < /body>
                              <body>This medicine is available only with your doctor's prescription. < /body>
                              <h8>More Information < /h8>
                              <ul>
                                <li><a className="a1" alt="mayoClinic" href="https://www.mayoclinic.org/drugs-supplements/tacrolimus-topical-route/description/drg-20068159" target="_blank"> Mayo Clinic< /a>< /li>
                                <li><a className="a1" alt="goodrx" href="https://www.goodrx.com/tacrolimus/what-is" target="_blank">GoodRx< /a>< /li>
                              < /ul>
                            < /body>
                            <button10>Message Prescriber< /button10>
                            <button11>Refill< /button11>
                          < /div>
                        < /div>
                      < /div>
                    < /div>
                  )
                }
              < /Popup>

          < /div>

          < /div>
        < /div>
      < /div>
    < /div>
  )
}}