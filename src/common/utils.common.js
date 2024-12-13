// Modules
import { DateTime } from "luxon";

// Get UTC Timestamp
export const getUtcTimestamp = () => {
  return DateTime.utc().toMillis();
};
