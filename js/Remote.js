class Remote {
    constructor(){
        this.code = 
        [[1,2,3],
        [4,5,6],
        [7,8,9]];
    }

    connectTivi(tivi){
        if(tivi.status){
            this.tivi = tivi;
        }else{
            for(let i=1;i<=9;i++){
                document.getElementById(i).style.disabled = true;
            }
        }
    }

    display(){
        let html = '<table>';
        html += '<tr>'
        html += '<td>';
        html += '<button onclick="turnOffTivi()">Off'
        html += '</td>';
        html += '<td>'
        html += '</td>'
        html += '<td>';
        html += '<button onclick="turnOnTivi()">On';
        html += '</button>'
        html += '</td>';

        this.code.forEach((element, i) => {
            html += '<tr>';
            for(const value of element){
                html+= '<td>'
                html+= '<button id='+value+' onclick ="remote.changeChanel('+(value-1)+')">';
                html+= value;
                html+= '</button>';
                html+= '</td>';
            }
            html += '</tr>';
        });
        html += '<tr>';
        html += '<td><button onclick="upVolumn()">▲</button></td>';
        html += '<td></td>';
        html += '<td><button onclick="rightChanel()">►</button></td>';
        html += '</tr>';
        html += '<tr>';
        html += '<td><button onclick="downVolumn()">▼</button></td>';
        html += '<td></td>';
        html += '<td><button onclick="leftChanel()">◄</button></td>';
        html += '</tr>';
        html += '</table>';
        document.getElementById('remote').innerHTML = html;
    }

    changeChanel(key){
        this.tivi.setChanel(key);
        this.tivi.setContent(key);
    }
}
