import { formatDistanceToNow } from "date-fns";

const date = "2005-01-15 10:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;
