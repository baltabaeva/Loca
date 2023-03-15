import { MenuItem } from "react-pro-sidebar";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface ItemProps {
    title: string;
    to: string;
    icon: JSX.Element;
    selected: string;
    setSelected: Function;
}

export default function ItemSide({title, to, icon, selected, setSelected}: ItemProps) {
    return (
        <MenuItem
            active={selected === title}
            style={{ color: "var(--bg-color-primary)" }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
}