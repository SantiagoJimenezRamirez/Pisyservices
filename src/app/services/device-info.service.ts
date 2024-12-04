import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UAParser } from 'ua-parser-js';
import { environment } from '../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {

  constructor(private http: HttpClient, 
    private router: Router) {}

  getDeviceInfo(): any {
    const parser = new UAParser();
    
    // Parseamos los datos
    const browser = parser.getBrowser();
    const os = parser.getOS();
    const device = parser.getDevice();
    const userAgent = parser.getUA();

    // Construimos el objeto
    const deviceInfo = {
      browser: `${browser.name || 'Desconocido'} ${browser.version || ''}`,
      os: `${os.name || 'Desconocido'} ${os.version || ''}`,
      device: `${device.vendor || 'Desconocido'} ${device.model || ''} (${device.type || 'desktop'})`,
      userAgent: userAgent,
    };
    console.log(deviceInfo)
    return deviceInfo;
  }

  getAll():any{
    return this.http.get(`${environment.apiUrl}/app/session/findAll`);
  }

  add(session:any):any{
    return this.http.post(`${environment.apiUrl}/app/session/create`, session);
  }
}
