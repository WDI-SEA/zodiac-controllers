const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');

if(currentLocation.slice(21,40) == '/Earth') menuItem[4].className = 'w3-bar-item w3-button w3-hover-green w3-green'

if(currentLocation.slice(21,40) == '/Fire') menuItem[3].className = 'w3-bar-item w3-button w3-hover-orange w3-orange'

if(currentLocation.slice(21,40) == '/Air')menuItem[2].className = 'w3-bar-item w3-button w3-hover-pink w3-pink'

if(currentLocation.slice(21,40) == '/Water' || currentLocation.slice(21,40) == '/Water/Taurus' || currentLocation.slice(21,40) == '/Water/Virgo' || currentLocation.slice(21,40) == '/Water/Capricorn' )menuItem[1].className = 'w3-bar-item w3-button w3-hover-blue w3-blue'

if(currentLocation.slice(21,40) == '/')menuItem[0].className = 'w3-bar-item w3-button w3-hover-dark-grey w3-dark-grey'



