import { Repository } from "typeorm";
import { Channel } from "../entities/Channel";
import { AppDataSource } from "../config/ormconfig";
import { ChannelRepositoryInterface } from "../interfaces/channelRepositoryInterface";

export class ChannelRepository implements ChannelRepositoryInterface{
  private channelRepository: Repository<Channel>;

  constructor() {
    this.channelRepository = AppDataSource.getRepository(Channel);
  }

  async findOne(channelId: string): Promise<Channel> {
    return this.channelRepository.findOneBy({ id: channelId });
  }
  
  async findByName(channelName: string): Promise<Channel> {
    return this.channelRepository.findOneBy({ name: channelName });
  }
}
