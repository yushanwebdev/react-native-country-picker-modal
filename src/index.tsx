import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle, ModalProps, FlatListProps } from 'react-native';

import { CountryProvider, DEFAULT_COUNTRY_CONTEXT } from './CountryContext';
import { CountryFilterProps } from './CountryFilter';
import { CountryPicker } from './CountryPicker';
import { ThemeProvider, DEFAULT_THEME, Theme } from './CountryTheme';
import { FlagButtonProps } from './FlagButton';
import {
  TranslationLanguageCode,
  CountryCode,
  Country,
  Region,
  Subregion,
} from './types';

interface Props {
  allowFontScaling?: boolean;
  countryCode: CountryCode;
  region?: Region;
  subregion?: Subregion;
  countryCodes?: CountryCode[];
  excludeCountries?: CountryCode[];
  preferredCountries?: CountryCode[];
  theme?: Theme;
  translation?: TranslationLanguageCode;
  modalProps?: ModalProps;
  filterProps?: CountryFilterProps;
  flatListProps?: FlatListProps<Country>;
  placeholder?: string;
  withAlphaFilter?: boolean;
  withCallingCode?: boolean;
  withCurrency?: boolean;
  withEmoji?: boolean;
  withCountryNameButton?: boolean;
  withCurrencyButton?: boolean;
  withCallingCodeButton?: boolean;
  withCloseButton?: boolean;
  withFlagButton?: boolean;
  withFilter?: boolean;
  withFlag?: boolean;
  withModal?: boolean;
  disableNativeModal?: boolean;
  visible?: boolean;
  containerButtonStyle?: StyleProp<ViewStyle>;
  renderFlagButton?(props: FlagButtonProps): ReactNode;
  renderCountryFilter?(props: CountryFilterProps): ReactNode;
  onSelect(country: Country): void;
  onOpen?(): void;
  onClose?(): void;
}

const Main = ({ theme, translation, ...props }: Props) => {
  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME, ...theme }}>
      <CountryProvider value={{ ...DEFAULT_COUNTRY_CONTEXT, translation }}>
        <CountryPicker {...props} />
      </CountryProvider>
    </ThemeProvider>
  );
};

export default Main;
export {
  getCountriesAsync as getAllCountries,
  getCountryCallingCodeAsync as getCallingCode,
} from './CountryService';
export { CountryModal } from './CountryModal';
export { DARK_THEME, DEFAULT_THEME } from './CountryTheme';
export { CountryFilter } from './CountryFilter';
export { CountryList } from './CountryList';
export { FlagButton } from './FlagButton';
export { Flag } from './Flag';
export { HeaderModal } from './HeaderModal';
export { CountryModalProvider } from './CountryModalProvider';
export * from './types';
