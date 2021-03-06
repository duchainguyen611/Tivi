class Tivi {
    constructor(currentChanel, currentVolumn,currentContent){
        this.currentChanel = currentChanel;
        this.currentVolumn = currentVolumn;
        this.currentContent = currentContent;
        this.status = false;
        this.chanel = 
        ['VTV1','VTV2','VTV3','CN','HBO','Disney','VTV5','Bibi','VTV6'];
        this.picture = 
        ['Chanel/VTV1.png','Chanel/VTV2.png','Chanel/VTV3.png','Chanel/CN.png','Chanel/HBO.png','Chanel/Disney.png','Chanel/VTV5.png','Chanel/Bibi.png','Chanel/VTV6.png'];
    }

    setChanel(code){
        this.currentChanel = this.chanel[code]; 
        this.displayLGD();
    }

    setContent(code){
        this.currentContent = this.picture[code]; 
        this.displayLGD();
    }

    getCurrentChanel(){
        return this.currentChanel;
    }

    getCurrentVolumn(){
        return this.currentVolumn;
    }

    getCurrentContent(){
        return this.currentContent;
    }

    displayLGD(){
        document.getElementById('currentChanel').innerHTML = this.getCurrentChanel();
        document.getElementById('currentVolumn').innerHTML = this.getCurrentVolumn();
        document.getElementById('currentImage').style.backgroundImage = 'url('+this.getCurrentContent()+')';
    }

    display(){
        let html = '<div id="content-tivi">';
        html+= '<div id="currentImage"></div>';
        html+= '<div id="currentChanel">'
        html+= this.currentChanel;
        html+= '</div>'
        html+= '<br><br><br><br><br>'
        html+= '<div id="currentVolumn">'
        html+= this.currentVolumn;
        html+= '</div>'
        html+= '</div>';
        document.getElementById('tivi').innerHTML = html;
    }

    turnOn(){
        this.status = true;
        document.getElementById('content-tivi').style.backgroundColor = 'white';
        document.getElementById('content-tivi').style.color = 'black';
        document.getElementById('currentChanel').style.color = 'black';
        document.getElementById('currentVolumn').style.color = 'black';
    }

    turnOff(){
        this.status = false;
        document.getElementById('content-tivi').style.backgroundColor = 'darkgrey';
        document.getElementById('content-tivi').style.color = 'darkgrey';
        document.getElementById('currentChanel').style.color = 'darkgrey';
        document.getElementById('currentVolumn').style.color = 'darkgrey';
    }

    upVolumnTivi(){
        this.currentVolumn++;
        document.getElementById('currentVolumn').innerHTML = this.getCurrentVolumn();
    }

    downVolumnTivi(){
        this.currentVolumn--;
        document.getElementById('currentVolumn').innerHTML = this.getCurrentVolumn();
    }

    changeLeftChanel(){
        
    }

    changeRightChanel(){

    }
}
