import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { MessageDTO } from './dto/message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private msgService: MessageService) {}

  @Get("/")
  async getMessages(@Res() res) {
    const data = await this.msgService.getMessages();
    res.status(HttpStatus.OK).json(data);
  }

  @Post("/")
  @HttpCode(201)
  async addMessage(@Res() res, @Body() messageDTO: MessageDTO) {
    await this.msgService.addMessage(messageDTO);
    res.status(HttpStatus.CREATED).send();
  }
}
