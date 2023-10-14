import { ListGroup } from "react-bootstrap";

export interface ItemTypePickerProps {
    items: {
        id: string;
        name: string;
    }[];
    selectedID: string;
    onItemSelect: (id: string) => void;
}

export default function ItemTypePicker(props: ItemTypePickerProps) {
    return (
        <ListGroup horizontal className={"mb-3"}>
            {props.items.map((item) => (
                <ListGroup.Item
                    key={item.id}
                    action
                    active={item.id === props.selectedID}
                    onClick={() => props.onItemSelect(item.id)}
                >
                    {item.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}