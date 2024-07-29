declare module 'pagedjs' {
    export class Previewer {
        preview: (html: string | undefined, stylesheets: string[], target: any) => Promise<any>;
    }
}
    