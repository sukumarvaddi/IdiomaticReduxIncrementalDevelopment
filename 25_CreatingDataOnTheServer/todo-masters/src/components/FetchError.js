/**
 * Created by svaddi_July_1_2015 on 10/3/16.
 */
import React from 'react';


const FetchError = ({message, onRetry}) => (
  <div>
    <p>Could not fetch todos. {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
)

export default FetchError;