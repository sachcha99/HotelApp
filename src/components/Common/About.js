
import React, { useState , useEffect} from 'react'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import AboutImg from'../Images/about2.jpg';
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};



const About=() =>{
    const token =JSON.parse(sessionStorage.getItem("token"));
    function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;

      }
      
      IconContainer.propTypes = {
        value: PropTypes.number.isRequired,
        
      };

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    setValue(event.target.value);
    
  };


  

  return (
    
    <div className="">
        <Header/>
        <img className="aboutImg" src={AboutImg}/>
        
        <div className="aboutFlex">
            <div className="aboutDetails">
            <div className="aboutUsTititle">About Us</div>
                <div className="aboutUsDesc">
                Revel in our histories. Chase our mysteries. Discover extraordinary places.
                 Unwind in our spaces. At Lemon Tree Hotels, we promise you are in good hands.
                  With the largest family of hotels and villas across Sri Lanka, we are delighted to welcome you into our homes found on the mountains to the coastline, 
                  and everywhere else in between. Our legendary hospitality is one that we are truly proud of,
                   and will forever remain synonymous with our name - wherever you may cross paths with us
                    on your travels far and wide. Our spaces have also been designed to seamlessly blend the 
                    finest of Sri Lankan hospitality with the nature of our surroundings, creating atmospheres 
                    of undiscovered luxury that you will find hard to match. 
                </div>
   
            </div>
            <div className="aboutForm">
                <div>
                <form onSubmit={handleSubmit} action="https://formsubmit.co/madhuramihiranga6@gmail.com" method="POST" >
                <div className="aboutFormTitle">
                    Feedback
                </div>
                <div className="">
                    
                         <input type="hidden" name="_subject" value="Lemon Tree Hotel New User Feedback"/>
                         <input type='email' id="outlined-textarea" className="aboutFormTextFeild" name="email" defaultValue={(token ? token.email:'')}  placeholder="Email" /><br/>
                         <input type="hidden" name="_autoresponse" value="Thank You "/>
                         <input type="hidden" name="_template" value="table"/>
                         {/* <TextField id="outlined-textarea" className="aboutFormTextFeildDesc"   placeholder="Description" /><br/> */}
                         <textarea className="aboutFormTextFeildDesc" name="description" placeholder="Description" ></textarea>


                     <div className="aboutFormRating"> Rating  </div>    
                        
                       <center>  <Rating
                            name="highlight-selected-only"
                            defaultValue={2}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                           
                            /></center>
                </div>
               
                <button  className="aboutFormBtn" >Send</button>
                </form>
                </div>
            </div>
        </div>
        <Footer/>
      
    </div>
  );
}

export default About;