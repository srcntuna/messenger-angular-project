import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ConversationControlComponentComponent } from './conversation-control-component/conversation-control-component.component';
import { ConversationHistoryComponentComponent } from './conversation-history-component/conversation-history-component.component';
import { ConversationThreadComponentComponent } from './conversation-thread-component/conversation-thread-component.component';
import { SenderMessageComponentComponent } from './sender-message-component/sender-message-component.component';
import { UserMessageComponentComponent } from './user-message-component/user-message-component.component';
import { SendMessageComponentComponent } from './send-message-component/send-message-component.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ConversationControlComponentComponent,
    ConversationHistoryComponentComponent,
    ConversationThreadComponentComponent,
    SenderMessageComponentComponent,
    UserMessageComponentComponent,
    SendMessageComponentComponent,
    ContactListComponentComponent,
    ContactComponentComponent,
    HighlightDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
