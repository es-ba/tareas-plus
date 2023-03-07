import { AppBackend } from "backend-plus";
import staticConfigYaml from "./def-config";

export default class AppTareas extends AppBackend{
    configStaticConfig(){
        super.configStaticConfig();
        this.setStaticConfig(staticConfigYaml);
    };
    
}