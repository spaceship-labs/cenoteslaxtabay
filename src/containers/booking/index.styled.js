import styled from "styled-components";
import bg from "../../theme/LOCHE-48.jpg";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 190px;
  background-image: url(${bg});
  background-size: cover;
  h1 {
    color: white;
    margin: 35px 0;
    font-size: ${props => props.theme.videoTitle};
    font-weight: normal;
    font-style: italic;
    ${props => props.theme.largeBreakPoint} {
      font-size: ${props => props.theme.videoTitle2x};
    }
    ${props => props.theme.smallBreakPoint} {
      font-size: ${props => props.theme.videoTitleXs};
    }
  }
`;

const Box = styled.div`
  width: 95%;
  max-width: 900px;
  box-sizing: border-box;
  padding: 70px 80px;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  ${props => props.theme.smallBreakPoint} {
    padding: 25px 20px;
  }
`;

const FormBox = styled(Box)`
  padding: 40px 80px;
  margin: 0 auto;
  background-color: ${props => props.theme.Box};
  margin-bottom: 60px;
  form {
    max-width: 500px;
    margin: 0 auto;
  }
  h2,
  h3 {
    color: ${props => props.theme.Green};
    font-weight: normal;
    margin: 0;
    font-style: italic;
    font-size: ${props => props.theme.TextBoxTitle};
    ${props => props.theme.largeBreakPoint} {
      font-size: ${props => props.theme.TextBoxTitle2x};
    }
  }
  p {
    margin: 0;
  }
  ${props => props.theme.smallBreakPoint} {
    padding: 25px 20px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  text-align: left;
  padding: 5px 0;
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    width: 100%;
  }
  label {
    box-sizing: border-box;
    display: block;
    width: 100%;
    text-transform: uppercase;
    font-size: ${props => props.theme.textSize};
    margin-bottom: 10px;
  }
  input,
  textarea {
    box-sizing: border-box;
    background-color: white;
    border: 0 none;
    display: block;
    width: 100%;
    padding: 10px 15px;
  }
`;

const Button = styled.button`
  display: block;
  margin: 40px 0 10px 0;
  padding: 12px;
  text-transform: uppercase;
  width: 100%;
  background: ${props => props.theme.Green};
  border: 1px solid ${props => props.theme.Green};
  color: white;
  &:hover {
    background: white;
    color: ${props => props.theme.Green};
  }
  &:disabled {
    background: ${props => props.theme.Green}!important;
    color: white !important;
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Rows = styled.div`
  display: flex;
  justify-content: space-between;
  ${props => props.theme.smallBreakPoint} {
    flex-direction: column;
  }
`;

const Row = styled.div`
  flex: 0 1 48%;
`;

export { Section, Box, FormBox, InputWrapper, Rows, Row, Button };
