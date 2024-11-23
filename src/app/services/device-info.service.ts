import { Injectable } from '@angular/core';
import { UAParser } from 'ua-parser-js';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {

  constructor() {}

  getDeviceInfo(): { browser: string; os: string; device: string; userAgent: string } {
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

    return deviceInfo;
  }
}
