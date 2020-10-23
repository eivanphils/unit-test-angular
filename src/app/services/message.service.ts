import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  set addMessage(message: string) {
    this.messages.push(message);
  }

  public getMessages(): string[] {
    return this.messages;
  }
}
