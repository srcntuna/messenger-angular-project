import { EventEmitter, Injectable } from '@angular/core';
import { Message } from 'src/message.model';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessagingDataService {
  private senderMessages: Message[] = [];

  private userMessages: Message[] = [];

  userMessagesChanged = new EventEmitter<Message[]>();
  senderMessagesChanged = new EventEmitter<Message[]>();

  constructor(
    private loggingSvce: LoggingService,
    private httpClient: HttpClient
  ) {
    loggingSvce.log('Messaging Data Service constructor completed');
  }

  getSenderMessages() {
    this.httpClient
      .get<Message[]>('http://localhost:8080/api/get-sender-messages')
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.senderMessages = messages;
        this.senderMessagesChanged.emit(this.senderMessages);
      });
    return this.senderMessages.slice();
  }

  getUserMessages() {
    this.httpClient
      .get<Message[]>('http://localhost:8080/api/get-user-messages')
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.userMessages = messages;
        this.userMessagesChanged.emit(this.userMessages);
      });
    return this.userMessages.slice();
  }

  addUserMessage(newMessage: Message) {
    this.httpClient
      .post<Message[]>('http://localhost:8080/api/add-user-message', newMessage)
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.userMessages = messages;
        this.userMessagesChanged.emit(this.userMessages);
      });
    this.userMessages.push(newMessage);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }
}
