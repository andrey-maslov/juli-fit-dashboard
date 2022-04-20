import ProductIcon from '@mui/icons-material/Collections';
import { EventCreate } from './EventCreate'
import EventEdit from './EventEdit'
import EventsList from './EventsList'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    icon: ProductIcon,
    create: EventCreate,
    edit: EventEdit,
    list: EventsList
};