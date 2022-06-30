import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
    toggleMode: () => void;
    isDark: boolean;
}

function Router({ toggleMode, isDark }: IRouterProps) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin isDark={isDark} />
                </Route>
                <Route path="">
                    <Coins toggleMode={toggleMode} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;

