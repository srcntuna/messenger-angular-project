import { Component, OnInit } from '@angular/core';
import { Message } from 'src/message.model';
import { User } from 'src/user.model';
import { LoggingService } from '../logging.service';
import { MessagingDataService } from '../messaging-data.service';

@Component({
  selector: 'app-send-message-component',
  templateUrl: './send-message-component.component.html',
  styleUrls: ['./send-message-component.component.css'],
})
export class SendMessageComponentComponent implements OnInit {
  messageString: string;

  constructor(
    private loggingSvce: LoggingService,
    private messagingSvce: MessagingDataService
  ) {}

  ngOnInit(): void {}

  // use the instance of the logging service in our event handler
  onSendMessage() {
    this.loggingSvce.log('Send following message: ');
    this.loggingSvce.log(this.messageString);
    const sender: User = new User('Sercan', true);
    const newMessage: Message = new Message(sender, this.messageString, 1, 2);
    this.messagingSvce.addUserMessage(newMessage);
  }
}

// export class Message {
//   constructor(
//     public sender: User,
//     public text: string,
//     public conversationId: number,
//     public sequenceNumber: number
//   ) {}
// }
