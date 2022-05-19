import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //@ViewChild()
  constructor() {
    this.inicio();
  }
  private inicio():void{
    console.log('iniciar');
    let watermark = {set:
      (str) => {
        let id = setWatermark(str);
        setInterval(() => {
            if (document.getElementById(id) === null) {
                id = setWatermark(str);
            }
        }, 2000);
        window.onresize = () => {
            // Ejecuta el c—digo Javascript cuando se cambia el tama–o del navegador:
            setWatermark(str);
        };
      }
    };
    let setWatermark = (str) => {
      let id = 'jeje';
      if(document.getElementById(id) !== null){
        document.body.removeChild(document.getElementById(id));
      }
      let can = document.createElement('canvas');
      can.width = 180;
      can.height = 90;
      let cans = can.getContext('2d');
      cans.rotate(-20 * Math.PI / 180);
      cans.font = '18px Vedana';
      cans.fillStyle = 'blue';
      cans.textAlign = 'left';
      cans.textBaseline = 'middle';
      cans.fillText(str, can.width / 20, can.height);
      let div = document.createElement('div');
      div.id = id;
      div.style.pointerEvents = 'none';
      div.style.top = '3px';
      div.style.left = '0px';
      div.style.opacity = '0.2';
      div.style.position = 'fixed';
      div.style.zIndex = '100000';
      div.style.width = document.documentElement.clientWidth + 'px';
      div.style.height = document.documentElement.clientHeight + 'px';
      div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat';
      document.body.appendChild(div);
      return id;
    };
    watermark.set("Marquita de agua");
  }
}
