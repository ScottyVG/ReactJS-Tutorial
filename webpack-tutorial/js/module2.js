var _ = require('lodash');
console.log('Module 2 loaded');
var people = [{
  "id": 1,
  "first_name": "Joyce",
  "last_name": "Mcdonald",
  "email": "jmcdonald0@usatoday.com",
  "gender": "Female",
  "ip_address": "133.194.122.33"
}, {
  "id": 2,
  "first_name": "Russell",
  "last_name": "Young",
  "email": "ryoung1@ow.ly",
  "gender": "Male",
  "ip_address": "153.174.231.25"
}, {
  "id": 3,
  "first_name": "Frances",
  "last_name": "Willis",
  "email": "fwillis2@g.co",
  "gender": "Female",
  "ip_address": "194.176.137.186"
}, {
  "id": 4,
  "first_name": "Cheryl",
  "last_name": "Cole",
  "email": "ccole3@digg.com",
  "gender": "Female",
  "ip_address": "213.15.194.43"
}, {
  "id": 5,
  "first_name": "Stephen",
  "last_name": "Cunningham",
  "email": "scunningham4@spiegel.de",
  "gender": "Male",
  "ip_address": "104.177.212.36"
}, {
  "id": 6,
  "first_name": "Janice",
  "last_name": "Morris",
  "email": "jmorris5@tamu.edu",
  "gender": "Female",
  "ip_address": "201.3.52.67"
}, {
  "id": 7,
  "first_name": "Patrick",
  "last_name": "Torres",
  "email": "ptorres6@wunderground.com",
  "gender": "Male",
  "ip_address": "193.35.230.215"
}, {
  "id": 8,
  "first_name": "Pamela",
  "last_name": "Thompson",
  "email": "pthompson7@ibm.com",
  "gender": "Female",
  "ip_address": "25.122.160.63"
}, {
  "id": 9,
  "first_name": "Carlos",
  "last_name": "Snyder",
  "email": "csnyder8@aol.com",
  "gender": "Male",
  "ip_address": "70.27.211.60"
}, {
  "id": 10,
  "first_name": "John",
  "last_name": "Evans",
  "email": "jevans9@ezinearticles.com",
  "gender": "Male",
  "ip_address": "169.102.109.18"
}, {
  "id": 11,
  "first_name": "Christopher",
  "last_name": "Sanchez",
  "email": "csancheza@gnu.org",
  "gender": "Male",
  "ip_address": "43.29.232.8"
}, {
  "id": 12,
  "first_name": "Jeffrey",
  "last_name": "Alvarez",
  "email": "jalvarezb@slashdot.org",
  "gender": "Male",
  "ip_address": "21.148.140.31"
}, {
  "id": 13,
  "first_name": "Julia",
  "last_name": "Rogers",
  "email": "jrogersc@theguardian.com",
  "gender": "Female",
  "ip_address": "117.199.180.162"
}, {
  "id": 14,
  "first_name": "Sandra",
  "last_name": "Cooper",
  "email": "scooperd@mozilla.org",
  "gender": "Female",
  "ip_address": "190.239.100.193"
}, {
  "id": 15,
  "first_name": "Stephen",
  "last_name": "Nichols",
  "email": "snicholse@studiopress.com",
  "gender": "Male",
  "ip_address": "81.182.85.34"
}, {
  "id": 16,
  "first_name": "Tammy",
  "last_name": "Riley",
  "email": "trileyf@mail.ru",
  "gender": "Female",
  "ip_address": "24.134.215.70"
}, {
  "id": 17,
  "first_name": "Harold",
  "last_name": "Frazier",
  "email": "hfrazierg@sphinn.com",
  "gender": "Male",
  "ip_address": "5.191.213.162"
}, {
  "id": 18,
  "first_name": "Joyce",
  "last_name": "Moreno",
  "email": "jmorenoh@time.com",
  "gender": "Female",
  "ip_address": "246.105.33.201"
}, {
  "id": 19,
  "first_name": "Margaret",
  "last_name": "Campbell",
  "email": "mcampbelli@sina.com.cn",
  "gender": "Female",
  "ip_address": "17.253.208.218"
}, {
  "id": 20,
  "first_name": "Heather",
  "last_name": "Reid",
  "email": "hreidj@marriott.com",
  "gender": "Female",
  "ip_address": "39.228.31.141"
}];

var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount + " females!")
