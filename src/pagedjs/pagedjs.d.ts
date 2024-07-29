declare module 'pagedjs' {
    export class Previewer {
        preview: (html: any | undefined, stylesheets: string[], target: any) => Promise<any>;
    }
}
    