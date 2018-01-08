import { ComponentOptions } from 'vue';
export declare type RuntimeComponentOptions = ComponentOptions<any>;
export interface RuntimeComponent {
    name: string;
    options: RuntimeComponentOptions;
    extendedOptions: RuntimeComponentOptions;
}
export interface RuntimeComponents {
    [name: string]: RuntimeComponent;
}
