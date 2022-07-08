import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

    checkStatus(){
      console.log("||||||||||");
      this.socket.on('connect',() => {
        console.log('CONECTADO AL SERVIDOR');
        this.socketStatus = true;
      });
      this.socket.on('disconnect',() => {
        console.log('DESCONECTADO DEL SERVIDOR');
        this.socketStatus = false;
      });
    }
}
