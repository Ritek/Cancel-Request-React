# HTTP call cancelation 

## About this repo 
This small app was created for testing AbortController functionality in React. 

## Explanation of the problem 
When HTTP call is made but component was unmounted, there is no longer need for awaiting the request. It can be also dangerous because of possible memory leak. 

## Methods used and other solution 
Methods used in the project are probably the simplest custom solutions.
For better user experience, check ReactQuery's ["Query Cancellation"](https://react-query.tanstack.com/guides/query-cancellation), which also uses AbortController. 

## Create React App 
This project was created with create-react-app to minimize on dependencies. 

## Testing functionality 
Initially requests may complete before you can change page. Try setting network throttling (chromium-based browsers) to test slower connection. After that every request should take a couple of seconds. Keep console open. 