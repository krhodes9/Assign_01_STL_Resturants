var mymap = L.map('mapid').setView([38.8, -89.5], 10);

var OpenTopoMap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);

var marker = L.marker([38.67, -90.299]).addTo(mymap);

marker.bindPopup("<b>Resturant 1</b><br>Mission Taco").openPopup();

var marker_2 = L.marker([38.63, -90.26]).addTo(mymap);

marker_2.bindPopup("<b>Resturant 2</b><br>Confluence Kombucha").openPopup();

var marker_3 = L.marker([38.63, -90.253]).addTo(mymap);

marker_3.bindPopup("<b>Resturant 3</b><br>Rise Coffee").openPopup();

var marker_4 = L.marker([38.622, -90.243]).addTo(mymap);

marker_4.bindPopup("<b>Resturant 4</b><br>Rooster").openPopup();

var marker_5 = L.marker([38.617, -90.211]).addTo(mymap);

marker_5.bindPopup("<b>Resturant 5</b><br>Square One Brewery").openPopup();
