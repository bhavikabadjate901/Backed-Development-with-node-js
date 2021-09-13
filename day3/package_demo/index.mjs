
import open from "open";
import fetch from "node-fetch";


const response = fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=431001&date=13-09-2021")  // covin api


// response
// .then(res => res.json())
// .then(json => console.log(json.sessions[0]['center_id']));




const response1 = await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=431001&date=13-09-2021")  // covin api


// await open('https://linkedin.com', {
// 	app: {
// 		name: open.apps.chrome
// 	}
// });
  
const data = await response1.json();
console.log(data.sessions[0]['slots']);


// Try to fetch data of all districts of a states\
// for each state filter the centers which has vaccine of user choice
// filter each data point based on whether user wants free or paid vacc
// send an email periodically
