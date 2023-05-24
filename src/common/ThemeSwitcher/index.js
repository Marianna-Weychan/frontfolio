import { useSelector, useDispatch } from "react-redux";
import { ThemeSwitcherWrapper, Button, Text, Switcher, IconWrapper, Icon } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";

export const ThemeSwitcher = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    return (
        <ThemeSwitcherWrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
                <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
                <Switcher>
                    <IconWrapper moveToRight={isDarkTheme}>
                        <Icon />
                    </IconWrapper>
                </Switcher>
            </Button>
        </ThemeSwitcherWrapper>
    );
};