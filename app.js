document.addEventListener("DOMContentLoaded", () => {
 let day;   
 switch (new Date().getDay()){
    case 0:
        day = 'Saturday';
        document.getElementById('arbol').style.color = 'rgba(13, 82, 13, 1)';
        break;
        case 1:
            day = 'Monday';
            document.getElementById('arbol').style.color = 'rgba(136, 17, 17, 1)';
            break;
        case 2:
            day = 'Tusday';
            document.getElementById('arbol').style.color = 'rgba(121, 14, 153, 1)';
            break;
        case 3:
            day = 'Wendsday';
            document.getElementById('arbol').style.color = '#000';
            break;
        case 4:
            day = 'Thurdays';
            document.getElementById('arbol').style.color = 'blue';
            break;
        case 5:
            day = 'friday';
            document.getElementById('arbol').style.color = 'green';
            break;
        case 6:
            day = 'saturday';
            document.getElementById('arbol').style.color = 'rgb(0, 77, 128)';
            break;            

 }

});