import { MigrationInterface, QueryRunner } from "typeorm";

export class Database1711463871478 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO notifier_db.user (id, name, email, phoneNumber, deviceToken) VALUES
            ('c0bc5e1d-27ad-49a5-a6c9-614ee522bd87','John Petrucii','john@dt.com','321123456','DEVTOKEN01'),
            ('3ca913d3-e88a-41b5-84ba-d4a9611ad581','Mike Portnoy','mike@dt.com','432123456','DEVTOKEN02'),
            ('6df7d3ae-f6fe-4068-b60f-25fd9bc9af6b','John Myung','myung@dt.com','543123456','DEVTOKEN03');`);

    await queryRunner.query(`INSERT INTO notifier_db.category (id, name) VALUES
            ('644927e3-a78b-4bf5-98fb-b5fd339d208a','Movies'),
            ('974c7205-59aa-4c1e-8eae-9acb74864596','Sports'),
            ('ee57b114-2047-413a-adf1-089d29991393','Finance');`);

    await queryRunner.query(`INSERT INTO notifier_db.channel (id, name) VALUES
            ('2638cb02-b140-4604-872b-36a1940d1016','Push Notification'),
            ('54a1d14e-4327-4e73-90f5-f4a7ae41906a','SMS'),
            ('a4ccf924-64fe-40bd-a11a-b2315d0488e8','E-mail');`);

    await queryRunner.query(`INSERT INTO notifier_db.user_subscribed_categories_category (userId, categoryId) VALUES
            ('3ca913d3-e88a-41b5-84ba-d4a9611ad581','644927e3-a78b-4bf5-98fb-b5fd339d208a'),
            ('3ca913d3-e88a-41b5-84ba-d4a9611ad581','974c7205-59aa-4c1e-8eae-9acb74864596'),
            ('6df7d3ae-f6fe-4068-b60f-25fd9bc9af6b','644927e3-a78b-4bf5-98fb-b5fd339d208a'),
            ('6df7d3ae-f6fe-4068-b60f-25fd9bc9af6b','974c7205-59aa-4c1e-8eae-9acb74864596'),
            ('6df7d3ae-f6fe-4068-b60f-25fd9bc9af6b','ee57b114-2047-413a-adf1-089d29991393');`);

    await queryRunner.query(`INSERT INTO notifier_db.user_notification_channels_channel (userId, channelId) VALUES
            ('3ca913d3-e88a-41b5-84ba-d4a9611ad581','a4ccf924-64fe-40bd-a11a-b2315d0488e8'),
            ('3ca913d3-e88a-41b5-84ba-d4a9611ad581','54a1d14e-4327-4e73-90f5-f4a7ae41906a'),
            ('3ca913d3-e88a-41b5-84ba-d4a9611ad581','2638cb02-b140-4604-872b-36a1940d1016'),
            ('6df7d3ae-f6fe-4068-b60f-25fd9bc9af6b','54a1d14e-4327-4e73-90f5-f4a7ae41906a'),
            ('6df7d3ae-f6fe-4068-b60f-25fd9bc9af6b','2638cb02-b140-4604-872b-36a1940d1016');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Truncate tables with no foreign key constraints
    await queryRunner.query(
      `TRUNCATE TABLE notifier_db.user_notification_channels_channel;`
    );

    // Truncate tables with foreign key constraints
    await queryRunner.query(
      `DELETE FROM notifier_db.user_subscribed_categories_category;`
    );
    await queryRunner.query(`DELETE FROM notifier_db.user;`);
    await queryRunner.query(`DELETE FROM notifier_db.category;`);
    await queryRunner.query(`DELETE FROM notifier_db.channel;`);
  }
}
