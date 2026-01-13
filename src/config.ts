import { ClientSideBasePluginConfig } from "@graphql-codegen/visitor-plugin-common";

export interface SolidUrqlPluginConfig extends ClientSideBasePluginConfig {
  withHooks: boolean;
  urqlImportFrom: string;
}
