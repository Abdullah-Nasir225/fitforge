import React from 'react';
import {styled} from 'styled-components';
import { Link } from 'react-router-dom';

const Btn = ({text,paths}) => {
  return (
    <StyledWrapper>
      <Link className='btn' to={paths}>{text}</Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
   display: inline-block;
   padding: 0.9rem 1.8rem;
   font-size: 18px;
   font-weight: 500;
   color: black;
   border: 3px solid rgb(255, 136, 0);
   cursor: pointer;
   position: relative;
   background-color: transparent;
   text-decoration: none;
   overflow: hidden;
   z-index: 1;
   transform:skew(-10deg);
   font-family: inherit;
  }

  .btn::before {
   content: "";
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   background-color: rgb(255, 136, 0);
   transform: translateX(-100%);
   transition: all .3s;
   z-index: -1;
  }

  .btn:hover::before {
  transform: translateX(0);
  }
  .btn:hover{
  color:white;
  }
  `;


export default Btn;
