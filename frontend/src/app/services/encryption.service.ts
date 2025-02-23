import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';
import { environment } from '@e/environment';
@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private secretKey = environment.encryptionKey;

  encrypt(password: string): string {
    return crypto.AES.encrypt(password, this.secretKey).toString();
  }
}
