var xhr = new XMLHttpRequest();
xhr.open('GET', 'access.html', false);
xhr.send();
var regExpIP = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/ig;
var IPList = xhr.responseText.match(regExpIP);
var d = {};
for (var i in IPList) {
    if (IPList[i] in d) {
        d[IPList[i]] += 1;
    }
    else d[IPList[i]] = 1;
}
var subnet = "";
var keys = Object.keys(d);
keys.sort();
for (var i in keys) {
    var regExpSubnet = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/i;
    var sn = keys[i].match(regExpSubnet);
    if (sn[0] != subnet) { 
        console.log(); 
        console.log(sn[0]);
        subnet = sn[0]; 
    }
    console.log(keys[i], "-", d[keys[i]]);
}