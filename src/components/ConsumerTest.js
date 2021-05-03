import React, { Component } from 'react'
import { withUnlaunchConsumer } from 'unlaunch-react-client-sdk';

const ConsumerTest = ({ flags, unlaunchClient /*, ...otherProps */ }) => {
  return(
    <>
    <h3>Test Page For Consumer Hoc </h3>
    <p>Flag Result with Consumer Hoc :{flags[`flag-2`]}</p>
    </>
  )

};

export default withUnlaunchConsumer()(ConsumerTest);
