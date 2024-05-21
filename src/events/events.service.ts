import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  getAllEvents() {
    return [
      {
        id: 1,
        name: 'test',
        description: 'test',
      },
    ];
  }
}
