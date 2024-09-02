import EventDB from "../../db/EventDB.ts";
import React from "react";
import EventModal from "./EventModal.tsx";

export default function EventDispatcher() {
    const [isVisible, setIsVisible] = React.useState(true);

    const activeEvent = React.useMemo(() => {
        return EventDB.find((event) => {
            // Check if the event is expired
            const isExpired = new Date(event.expirationDate) < new Date();
            if (isExpired)
                return false;

            // Check if the event has been dismissed
            const isDismissed = localStorage.getItem(`event-${event.id}`) === "dismissed";
            if (isDismissed)
                return false;

            return true;
        });
    }, []);

    const onDismiss = React.useCallback(() => {
        localStorage.setItem(`event-${activeEvent?.id}`, "dismissed");
        setIsVisible(false);
    }, [activeEvent]);

    if (!activeEvent)
        return null;
    return (
        <EventModal
            eventID={activeEvent.id}
            isVisible={isVisible}
            onDismiss={onDismiss}
        />
    )
}