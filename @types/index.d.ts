declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const svgUrl: string;
    const svgComponent: React.FC<React.SVGAttributes<SVGElement>>;
    export default svgUrl;
    export { svgComponent as ReactComponent };
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}