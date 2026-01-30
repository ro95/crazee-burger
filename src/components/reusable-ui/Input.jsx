import React from "react"
import styled from "styled-components";
import { theme } from "../../index"; 


export default function Input({ value, onChange,Icon, ...restProps }) {
  return (
    <Inputstyled  className="input-wrapper">
    {Icon && Icon}
    <input 
      onChange={onChange} 
      type="text"
      {...restProps}/>
    </Inputstyled>
  );
}

const Inputstyled = styled.div`
    position: relative;
    width: 400px;
    margin-bottom: 20px;

  .input-wrapper {
      position: relative;
      width: 400px;
      margin-bottom: 20px;
    }
  
    .icon {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 24px;
      color: ${theme.colors.greyDark};
      z-index: 10;
      pointer-events: none;
      display: flex;
      align-items: center;
    }
  
        input {
          width: 100%;
          padding: 18px 24px 18px 50px;
          border: 2px solid transparent;
          border-radius: ${theme.borderRadius.round};
          font-size: ${theme.fonts.size.P0};
          font-family: ${theme.fonts.family.body};
          background-color: ${theme.colors.white};
          position: relative;
          z-index: 1;
      
          &::placeholder {
            color: ${theme.colors.greyMedium};
          }
        }
    `;