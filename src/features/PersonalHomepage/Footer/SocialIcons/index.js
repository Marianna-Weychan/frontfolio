import { Item, Link, List } from "./styled";
import { socialsData } from "./socialsData";

export const SocialIcons = () => (
    <List>
        {socialsData.map(({ name, url, Icon }) => (
            <Item key={name}>
                <Link href={url} title={name} target="_blank" rel="noreferrer noopener">
                    <Icon />
                </Link>
            </Item>
        ))}
    </List>
);