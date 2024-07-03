import React from "react";
import { Link } from "react-router-dom";
import PricingOptions from "./PricingOptions";
import Tab from "./Tab";
import image from "../assets/mark.png";


const Content1 = () => {
  const content1State = {
    id: 'regular',
    price: 3000,
    duration: 'daily',
  }
  const content1Classical = {
    id: 'classical',
    price: 10000,
    duration: 'daily',
  }
  return (
    <>
      <div className="pricing-box left">
        <h2 className="pricing-box-heading" style={{color: '#ff6600'}}>REGULAR</h2>
        <p className="pricing-box-price">N3,000.00</p>

        <ul className="choice--list u-margin-bottom-medium" style={{maxWidth: 486}}>
          <li className="choice--items">
            <div className="choice-span activator">
              <img src={image} alt="mark-tick" />
            </div>
            <p className="choice-title">
              access to gym, games and relaxation spot
            </p>
          </li>
          <li className="choice--items">
            <div className="choice-span activator">
              <img src={image} alt="mark-tick" />
            </div>
            <p className="choice-title">
              Participate in scheduled fitness workouts and wellness programmes
            </p>
          </li>
          <li className="choice--items">
            <div className="choice-span activator">
              <img src={image} alt="mark-tick" />
            </div>
            <p className="choice-title">Participate in dance fitness class</p>
          </li>
        </ul>

        <button type="button" className="btn">
          <Link to={`/subscription/${content1State.id}`} state={content1State}>
            Subscribe
          </Link>
        </button>
      </div>

      <div className="pricing-box right">
        <h2 className="pricing-box-heading">CLASSICAL</h2>
        <p className="pricing-box-price">N10,000.00</p>

        <ul className="choice--list u-margin-bottom-medium" style={{maxWidth: 486}}>
          <li className="choice--items">
            <div className="choice-span ">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">
              access to gym, games and relaxation spot
            </p>
          </li>
          <li className="choice--items">
            <div className="choice-span ">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">
              Participate in scheduled fitness workouts and wellness programmes
            </p>
          </li>
          <li className="choice--items">
            <div className="choice-span">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">Participate in dance fitness class</p>
          </li>
          <li className="choice--items">
            <div className="choice-span ">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">Priority consideration to all services and activities</p>
          </li>
          <li className="choice--items">
            <div className="choice-span ">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">Allowed to bring guest 5 times within a month. However, the guest must register to access the service.</p>
          </li>
        </ul>

        <button type="button" className="btn"  style={{color: '#ff6600', backgroundColor:'#fff'}}>
          <Link to={`/subscription/${content1Classical.id}`} state={content1Classical}>
            Subscribe
          </Link>
        </button>
      </div>
    </>

  );
};

const Content2 = () => {
  const content2State = {
    id: 'regular',
    price: 17000,
    duration: 'monthly',
  }
  const content2Classical = {
    id: 'classical',
    price: 30000,
    duration: 'monthly',
  }
  return (
    <>
      <div className="pricing-box left">
        <h2 className="pricing-box-heading" style={{color: '#ff6600'}}>REGULAR</h2>
        <p className="pricing-box-price">N17,000.00</p>

        <ul className="choice--list u-margin-bottom-medium" style={{maxWidth: 486}}>
          <li className="choice--items">
            <div className="choice-span activator">
              <img src={image} alt="mark-tick" />
            </div>
            <p className="choice-title">
              access to gym, games and relaxation spot
            </p>
          </li>
          <li className="choice--items">
            <div className="choice-span activator">
              <img src={image} alt="mark-tick" />
            </div>
            <p className="choice-title">
              Participate in scheduled fitness workouts and wellness programmes
            </p>
          </li>
          <li className="choice--items">
            <div className="choice-span activator">
              <img src={image} alt="mark-tick" />
            </div>
            <p className="choice-title">Participate in dance fitness class</p>
          </li>
        </ul>

        <button type="button" className="btn">
          <Link to={`/subscription/${content2State.id}`} state={content2State}>
            Subscribe
          </Link>
        </button>
      </div>

      <div className="pricing-box right">
        <h2 className="pricing-box-heading">CLASSICAL</h2>
        <p className="pricing-box-price">N30,000.00</p>

        <ul className="choice--list u-margin-bottom-medium" style={{maxWidth: 486}}>
          <li className="choice--items">
            <div className="choice-span ">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">
              access to gym, games and relaxation spot
            </p>
          </li>
          <li className="choice--items">
            <div className="choice-span ">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">
              Participate in scheduled fitness workouts and wellness programmes
            </p>
          </li>
          <li className="choice--items">
            <div className="choice-span">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">Participate in dance fitness class</p>
          </li>
          <li className="choice--items">
            <div className="choice-span ">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">Priority consideration to all services and activities</p>
          </li>
          <li className="choice--items">
            <div className="choice-span ">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">Allowed to bring guest 5 times within a month. However, the guest must register to access the service.</p>
          </li>
        </ul>

        <button type="button" className="btn"  style={{color: '#ff6600', backgroundColor:'#fff'}}>
          <Link to={`/subscription/${content2Classical.id}`} state={content2Classical}>
            Subscribe
          </Link>
        </button>
      </div>
    </>
  )
};

const Content3 = () => {
  const content3State = {
    id: 'regular',
    price: 125000,
    duration: 'yearly',
  }
  const content3Classical = {
    id: 'classical',
    price: 210000,
    duration: 'yearly',
  }
  return (
    <>
      <div className="pricing-box left">
        <h2 className="pricing-box-heading" style={{color: '#ff6600'}}>REGULAR</h2>
        <p className="pricing-box-price">N125,000.00</p>

        <ul className="choice--list u-margin-bottom-medium" style={{maxWidth: 486}}>
          <li className="choice--items">
            <div className="choice-span activator">
              <img src={image} alt="mark-tick" />
            </div>
            <p className="choice-title">
              access to gym, games and relaxation spot
            </p>
          </li>
          <li className="choice--items">
            <div className="choice-span activator">
              <img src={image} alt="mark-tick" />
            </div>
            <p className="choice-title">
              Participate in scheduled fitness workouts and wellness programmes
            </p>
          </li>
          <li className="choice--items">
            <div className="choice-span activator">
              <img src={image} alt="mark-tick" />
            </div>
            <p className="choice-title">Participate in dance fitness class</p>
          </li>
        </ul>

        <button type="button" className="btn">
          <Link to={`/subscription/${content3State.id}`} state={content3State}>
            Subscribe
          </Link>
        </button>
      </div>

      <div className="pricing-box right">
        <h2 className="pricing-box-heading">CLASSICAL</h2>
        <p className="pricing-box-price">N210,000.00</p>

        <ul className="choice--list u-margin-bottom-medium" style={{maxWidth: 486}}>
          <li className="choice--items">
            <div className="choice-span ">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">
              access to gym, games and relaxation spot
            </p>
          </li>
          <li className="choice--items">
            <div className="choice-span ">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">
              Participate in scheduled fitness workouts and wellness programmes
            </p>
          </li>
          <li className="choice--items">
            <div className="choice-span">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">Participate in dance fitness class</p>
          </li>
          <li className="choice--items">
            <div className="choice-span ">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">Priority consideration to all services and activities</p>
          </li>
          <li className="choice--items">
            <div className="choice-span ">
              <img src={image} alt="mark-tick" style={{color: '#ff6600'}}/>
            </div>
            <p className="choice-title">Allowed to bring guest 5 times within a month. However, the guest must register to access the service.</p>
          </li>
        </ul>

        <button type="button" className="btn"  style={{color: '#ff6600', backgroundColor:'#fff'}}>
          <Link to={`/subscription/${content3Classical.id}`} state={content3Classical}>
            Subscribe
          </Link>
        </button>
      </div>
    </>
  )
};

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="container">
        <h1 className="pricing--heading u-margin-bottom-normal">
          {" "}
           <span> membership </span> plans
        </h1>
        <PricingOptions>
          <Tab label="DAILY">
            <Content1 />
          </Tab>
          <Tab label="MONTHLY">
            <Content2 />
          </Tab>
          <Tab label="YEARLY">
            <Content3 />
          </Tab>
        </PricingOptions>
      </div>
    </div>
  );
};

export default Pricing;
