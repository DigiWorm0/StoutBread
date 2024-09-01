import React from "react";
import {EventID} from "../types/EventItem.ts";
import EventDB from "../db/EventDB.ts";

export default function useEvent(id?: EventID) {
    return React.useMemo(() => EventDB.find((event) => event.id === id), [id]);
}