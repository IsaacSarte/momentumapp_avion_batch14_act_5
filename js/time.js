let updClock = () => {
    let now = new Date();
    let dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        hou == 0 ? hou = 12 : ``;

        hou > 12 ? hou = hou -12 : pe = 'PM';

        Number.prototype.pad = function(digits) {
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }

        let months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
        let week = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
        let ids = ["dayname","month","daynum","year","hour","minutes","seconds","period"];
        let values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

        for(let i = 0; i < ids.length; i++) 
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

let initClock = () => {
    updClock();
    window.setInterval("updClock()" , 1);
}