import {CreateEventForm} from '../modules/event';
import {Box} from "@mui/material";
import Header from "../ui/Header/Header";

export default function CreateEventPage() {
    return (
        <Box p="20px" display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Создать событие" subtitle="Create an event"/>
                <Box p="10px" display="flex" justifyContent="flex-start">
                <CreateEventForm/>
            </Box>
            </Box>
        </Box>
    );
};
