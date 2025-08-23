document.addEventListener("DOMContentLoaded", () => {
 let day;   
 let elem = document.getElementById('arbol');
 switch (new Date().getDay()){
    case 0:
        day = 'Sunday';
        elem.style.color = 'rgba(13, 82, 13, 1)';
        break;
        case 1:
            day = 'Monday';
            elem.style.color = 'rgba(136, 17, 17, 1)';
            break;
        case 2:
            day = 'Tuesday';
            elem.style.color = 'rgba(121, 14, 153, 1)';
            break;
        case 3:
            day = 'Wednesday';
            elem.style.color = '#000';
            break;
        case 4:
            day = 'Thursday';
            elem.style.color = 'blue';
            break;
        case 5:
            day = 'Friday';
            elem.style.color = 'green';
            break;
        case 6:
            day = 'Saturday';
            elem.style.color = 'rgb(0, 77, 128)';
            break;            

 }

document.getElementById('arbol').textContent = `Call us, we have a special to replace the mulch at a super price, today is ${day}`;
});