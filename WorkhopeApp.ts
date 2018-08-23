import {
    ILogger,
    IConfigurationExtend,
    IEnvironmentRead
    } from '@rocket.chat/apps-ts-definition/accessors';
    
import { TestingPermissions } from './commands/TestingPermissions';

import { App } from '@rocket.chat/apps-ts-definition/App';
import { IAppInfo } from '@rocket.chat/apps-ts-definition/metadata';

export class WorkhopeApp extends App {
    constructor(info: IAppInfo, logger: ILogger) {
        super(info, logger);
    }
    
    
    protected async extendConfiguration(configuration: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {
      await configuration.slashCommands.provideSlashCommand(new TestingPermissions());
    }   
}
