import { AppBackend } from "backend-plus";
import staticConfigYaml from "./def-config";
import { tasks } from "./table-tasks";

export default class AppTasks extends AppBackend{
            
    constructor(){
        super();
    }
    configStaticConfig(){
        super.configStaticConfig();
        this.setStaticConfig(staticConfigYaml);
    };

    prepareGetTables(): void {
        super.prepareGetTables()
        this.getTableDefinition={...this.getTableDefinition, 
            tasks
        }
    }
    
}