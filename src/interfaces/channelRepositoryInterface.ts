import { Channel } from '../entities/Channel';

export interface ChannelRepositoryInterface {
    findOne(channelId: string): Promise<Channel>;
    findByName(channelName: string): Promise<Channel>;
}
