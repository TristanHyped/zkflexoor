import numbro from 'numbro';
import { formatUnits } from 'viem';

export const formatAddress = (address: string) => {
  return address.slice(0, 6) + '...' + address.slice(-6);
};

/**
 * Shortens an address by showing the first 4 characters and the last 4 characters.
 * @param address - The full address to be shortened.
 * @returns A string representing the shortened address.
 */
export function shortenAddress(address: string, length: number = 4) {
  return `${address.substring(0, length)}...${address.substring(
    address.length - length - 1,
    address.length - 1
  )}`;
}

type INumbroFormatParams = numbro.Format & {
  dynamicMantissa?: boolean;
};

/**
 * Dynamically determines the mantissa based on the value.
 * @param value - The value to determine the mantissa for.
 * @returns The number of decimal places to use.
 */
function getDynamicMantissa(value: number): number {
  return value > 10
    ? 1
    : value > 1
      ? 2
      : value > 0.1
        ? 3
        : value > 0.01
          ? 4
          : 5;
}

/**
 * Default formatting parameters for numbro.
 */
export const numbroParamsDefault: INumbroFormatParams = {
  mantissa: 2,
  average: true,
  thousandSeparated: true,
  trimMantissa: true,
};

/**
 * Formatting parameters for numbro that force average.
 */
export const numbroParamsForceAverage: INumbroFormatParams = {
  mantissa: 2,
  average: true,
  thousandSeparated: true,
  trimMantissa: true,
};

/**
 * Formats value using numbro with optional dynamic mantissa.
 * @param value - The number to format.
 * @param params - The formatting parameters.
 * @returns A string representing the formatted number.
 */
export function numbroFormat(
  value: number,
  params: INumbroFormatParams = numbroParamsDefault
): string {
  const numbroParams: numbro.Format = {
    mantissa:
      params.mantissa ??
      (params.dynamicMantissa ? getDynamicMantissa(value) : 2),
    thousandSeparated: params.thousandSeparated ?? true,
    trimMantissa: params.trimMantissa ?? true,
    // average: params.forceAverage
    //   ? params.forceAverage === "thousand"
    //     ? value > 10000
    //     : !!params.average
    //   : !!params.average,
    /** @TODO roundingFunction with mantissa */
    // roundingFunction: (number: number) => {
    //     return Math.floor(number * 100) / 100; // Adjust for 2 decimal places
    // },
  };

  if (value === Infinity || Number.isNaN(value)) return '0';
  return numbro(value).format(numbroParams);
}

/**
 * Formats a date string into a human-readable format.
 * @param dateString - The date string to format.
 * @returns A string representing the formatted date.
 */
export function formatDateString(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const isSameDay =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  // TODO Fix "Just now"
  // const diffInMinutes = (now.getDay() - date.getTime()) / (1000 * 60);
  // if (diffInMinutes <= 2) {
  //     return 'Just now';
  // }

  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const period = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM

  if (isSameDay) {
    return `${formattedHours}:${minutes}${period}`;
  }

  return `${month}/${day} ${formattedHours}:${minutes}${period}`;
}
/**
 * Formats a date string into a human-readable format.
 * @param dateString - The date string to format.
 * @returns A string representing the formatted date.
 */
export function timeSinceDate(dateString: string): string {
  const now = new Date();
  const past = new Date(dateString);
  const diffMs = now.getTime() - past.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffMonths >= 1) {
    return `${diffMonths}M`;
  } else if (diffWeeks >= 1) {
    return `${diffWeeks}w`;
  } else if (diffDays >= 1) {
    return `${diffDays}d`;
  } else if (diffHours >= 12) {
    return `12h`;
  } else if (diffHours >= 1) {
    return `${diffHours}h`;
  } else if (diffMinutes >= 5) {
    return `5m`;
  } else if (diffMinutes >= 1) {
    return `1m`;
  } else {
    return 'now';
  }
}

export const formatPrivyId = (id: string) => {
  return id.replace('did:privy:', '').slice(0, 10) + '...';
};

export function scaleBigIntToNumber(
  value: bigint,
  decimals = 18,
  precision?: number
): number {
  /** Make sure decimals is an integer */
  decimals = Math.floor(decimals);
  if (!value) return 0;
  return Number(
    Number(formatUnits(value, decimals)).toFixed(
      precision ? precision : decimals
    )
  );
}

/**
 * Converts a string to sentence case (first letter capitalized, rest lowercase)
 * @param str - The string to convert
 * @returns The string in sentence case
 */
export function toSentenceCase(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Adds the .hl extension to a name.
 * @param name - The name to be HLified.
 * @returns A string representing the HLified name.
 */
export function HLify(name: string) {
  return name === '' || name.endsWith('.hl')
    ? name
    : `${name.toLowerCase()}.hl`;
}
