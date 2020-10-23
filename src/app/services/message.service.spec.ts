import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addMesage', () => {
    it('should add the message to the array', () => {
      const messages: string[] = [];
      const messageService = new MessageService();

      messageService.addMessage = 'phils';

      expect(messageService.getMessages().length).toBe(1);
    });
  });

});
