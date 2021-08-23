import { cn } from "@bem-react/classname";

const cnContainer = cn("container");
const center = " flex-center column";

const Background = ({ children }) => {
    return <div className={cnContainer() + center}>{children}</div>;
};

export default Background;
