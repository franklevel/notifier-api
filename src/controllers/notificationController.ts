import { Request, Response } from "express";
import { NotificationService } from "../services/notificationService";
import { UserRepository } from "../repositories/userRepository";
import { NotificationRepository } from "../repositories/notificationRepository";
import { ChannelRepository } from "../repositories/channelRepository";
import { CategoryRepository } from "../repositories/categoryRepository";
import { Notification } from "../entities/Notification";

const userRepository = new UserRepository();
const notificationRepository = new NotificationRepository();
const channelRepository = new ChannelRepository();
const categoryRepository = new CategoryRepository();

const notificationService = new NotificationService(
  userRepository,
  notificationRepository,
  categoryRepository,
  channelRepository
);

export const sendNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { message, categoryId } = req.body;
  try {
    await notificationService.sendNotification(message, categoryId);
    console.log({ message, categoryId });
    res.status(200).json({ message: "Notification sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to send notification", error });
  }
};

export const getAll = async (
  req: Request,
  res: Response
): Promise<Notification[] | void> => {
  try {
    const notifications = await notificationRepository.getAll();
    console.log({ notifications });
    res.status(200).json({ notifications });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to send notification", error });
  }
};
