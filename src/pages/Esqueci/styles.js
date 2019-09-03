import styled from "styled-components";
export const Container = styled.div`
   {
    @media only screen and (max-width: 768px) {
      * {
        justify-content: center;
        display: flex;
        justify-content: center;
        padding: 15px;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        min-width: 480px;
      }
      .titulo {
        font-size: 40px;
        color: rgb(6, 106, 117);
        font-weight: bold;
        text-align: center;
      }
      button {
        background-color: rgb(61, 157, 179);
        color: white;
        justify-content: center;
        text-align: center;
        float: left;
        top: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
      }
      a {
        color: rgb(6, 106, 117);
      }
    }
    @media only screen and (min-width: 480px) {
      * {
        justify-content: center;
        display: flex;
        justify-content: center;
        padding: 15px;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        min-width: 480px;
      }
      .titulo {
        font-size: 40px;
        color: rgb(6, 106, 117);
        font-weight: bold;
        text-align: center;
      }
      button {
        background-color: rgb(61, 157, 179);
        color: white;
        justify-content: center;
        text-align: center;
        float: left;
        top: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
      }
      a {
        color: rgb(6, 106, 117);
      }
    }
  }
`;
