import Vue, { ComponentOptions, PropOptions } from 'vue';
declare const VueInfoAddon: (storyFn: () => ComponentOptions<any, object | ((this: any) => object), {
    [key: string]: (this: any, ...args: any[]) => any;
}, {
    [key: string]: any;
}, string[] | {
    [x: string]: PropOptions<any> | (() => any) | (new (...args: any[]) => any) | ((() => any) | (new (...args: any[]) => any))[];
}>) => ComponentOptions<Vue, object | ((this: Vue) => object), {
    [key: string]: (this: Vue, ...args: any[]) => any;
}, {
    [key: string]: any;
}, string[] | {
    [x: string]: PropOptions<any> | (() => any) | (new (...args: any[]) => any) | ((() => any) | (new (...args: any[]) => any))[];
}>;
export default VueInfoAddon;
