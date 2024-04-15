import React, { memo } from 'react';
import { Text } from 'react-native';

const Emoji = memo(({ name }: { name: string }) => {
  function getFlagEmoji(code: string) {
    // Extract the country code from the input string (assuming it starts with "flag-")
    const regionCode = code.replace('flag-', '').toUpperCase();

    if (regionCode.length !== 2) {
      return ''; // Country code must be 2 characters
    }

    const codePoints = regionCode
      .toUpperCase() // ISO 3166-1 alpha-2 should be in upper case
      .split('') // Split the country code into individual letters
      .map(char => 0x1f1e6 + char.charCodeAt(0) - 'A'.charCodeAt(0)); // Calculate regional indicator symbol code points

    return String.fromCodePoint(...codePoints); // Convert to string and return the flag emoji
  }

  return <Text allowFontScaling={false}>{getFlagEmoji(name)}</Text>;
});

export { Emoji };
