import styled from "styled-components";

export * from "./Input";

export const WrapperInput = styled.div`
  .number {
    -webkit-appearance: none !important;
    appearance: none !important;
  }
`;

export const CheckboxWrapper = styled.div`
  .label {
    padding: 5px 15px 5px 51px;
    display: inline-block;
    position: relative;
    font-size: 16px;
    border-radius: 3px;
    cursor: pointer;
  }

  .label:hover {
    background: "#292556";
  }

  .label:before {
    content: "";
    width: 17px;
    height: 17px;
    display: inline-block;
    border: 3px solid purple;
    border-radius: 50%;
    position: absolute;
    left: 17px;
    top: 7px;
  }

  .input:checked + label:before {
    content: "";
    width: 17px;
    height: 17px;
    display: inline-block;
    border: 3px solid purple;
    background: purple;
    border-radius: 50%;
    position: absolute;
    left: 17px;
    top: 7px;
  }
`;
