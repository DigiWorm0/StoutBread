import {ListGroup} from "react-bootstrap";
import {ShopItemID} from "../../types/ShopItem.ts";
import useShopItemGroup from "../../hooks/useShopItemGroup.ts";

export interface ItemTypePickerProps {
    itemID: ShopItemID;
    onSelectID: (id: ShopItemID) => void;
}

export default function ItemTypePicker(props: ItemTypePickerProps) {
    const group = useShopItemGroup(props.itemID);

    return (
        <ListGroup horizontal className={"mb-3"}>
            {group?.map((subitem) => (
                <ListGroup.Item
                    key={subitem.id}
                    action
                    active={subitem.id === props.itemID}
                    onClick={() => props.onSelectID(subitem.id)}
                >
                    {subitem.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}