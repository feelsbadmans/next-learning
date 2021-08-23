import { cn } from "@bem-react/classname";
import SearchBar from "../containers/SearchBar/SearchBar";

const cnContainer = cn("container");
const center = " flex-center column";

const Index = () => {
  return (
    <div className={cnContainer() + center}>
      <h1>Weather Forecast</h1>
      <SearchBar />
    </div>
  );
};

export default Index;
