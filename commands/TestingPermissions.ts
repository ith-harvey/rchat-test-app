import { IHttp, IModify, IPersistence, IRead } from '@rocket.chat/apps-ts-definition/accessors';
import { ISlashCommand, SlashCommandContext } from '@rocket.chat/apps-ts-definition/slashcommands';

export class TestingPermissions implements ISlashCommand {

      public command = 'testing-with-permission';
      public i18nParamsExample = 'TestingApp_NoParams';
      public i18nDescription = 'TestingApp_CmdWithPerm';
      public providesPreview = false;

    // tslint:disable-next-line:max-line-length
    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<void> {
      return await this.sendNotifyMessage(context, modify, 'here!');
    }

    private async sendNotifyMessage(context: SlashCommandContext, modify: IModify, text: string): Promise<void> {
      const msg = modify.getCreator().startMessage().setText(text)
        .setUsernameAlias('testing?').setEmojiAvatar(':calendar:')
        .setRoom(context.getRoom()).setSender(context.getSender()).getMessage();

        return await modify.getNotifer().notifyUser(context.getSender(), msg);
    }


}
