import { format } from "date-fns";

/**
 * Formats a given utc string (eg. '2019-06-28T04:51:20.123Z')
 * or date to the provided format by default to 'MM/dd/yyyy'
 */
export const formatDate = (
  dateStr: string | Date,
  dateFormat = "MM/dd/yyyy"
): string => format(new Date(dateStr), dateFormat);
