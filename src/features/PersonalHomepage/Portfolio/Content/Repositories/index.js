import { List, Tile, Name, Description, Links, LinksRow, LinksValue, Link } from "./styled";

export const Repositories = ({ repositories }) => (
    <List>
        {repositories.map(({ id, name, description, homepage, html_url }) => (
            <Tile key={id}>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <Links>
                    {!!homepage && (
                        <LinksRow>
                            <dt>Demo:</dt>
                            <LinksValue>
                                <Link href={homepage} target="_blank" rel="noreferrer noopener">Project Demo</Link>
                            </LinksValue>
                        </LinksRow>
                    )}
                    <LinksRow>
                        <dt>Code:</dt>
                        <LinksValue>
                            <Link href={html_url} target="_blank" rel="noreferrer noopener">Github Repository</Link>
                        </LinksValue>
                    </LinksRow>
                </Links>
            </Tile>
        ))}
    </List>
);
