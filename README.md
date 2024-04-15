# React Native Country Picker 🗺️

A highly customizable country picker component for React Native. Built for flexibility, this allows you to easily integrate it into your project and tailor its appearance and functionality to match your application's unique design.

## Inspired by 🌟

This project is a fork of the amazing [xcarpentier/react-native-country-picker-modal](https://github.com/xcarpentier/react-native-country-picker-modal), which has been inactive for long time. I have taken the initiative to maintain and enhance the package to ensure that it remains up-to-date and compatible with the latest versions of React Native & other dependencies.


## Key Features 💡

Other than the features that provided by the original package, this package has some additional features as well.
- **Highly Customizable**: Customize the appearance and functionality of the country picker to match your application's unique design.
* **Simple Integration:** Start using the country picker within minutes.

## Installation 🚀

1. Install Dependencies:

```bash
$ npm install @callstack/react-theme-provider fuse.js react-async-hook
```

2. Download and Extract Components:
* Download the ZIP file from: https://github.com/yushanwebdev/react-native-country-picker-modal/releases/download/v3.0.0/CountryPickerModal.zip
* Extract the contents of the ZIP file into your project's components directory.

That's it! You're ready to start using the country picker. 🚀

## Usage 🛠️

Now you can start using it in anywhere of your project like this:

```jsx
import { CountryPicker } from '@/components/ui/CountryPickerModal/CountryPicker' // This path will be differ based on your project structure 

export default function Example() {
    const [regionCode, setRegionCode] = useState<CountryCode>('UK');

    const onSelectCountry = (country: Country) => {
        setRegionCode(country.cca2);
    };

    return (
        <CountryPicker
          onSelect={onSelectCountry}
          countryCode={regionCode}
          withEmoji
          withFilter
        />
    )
}
```

**Now that the component resides within your project, you have full freedom to customize it however you like. No more waiting on maintainers for PR approvals or patching node_modules 🤩**

## Future Plans 🔮

* **Automated Installation:** Development of a CLI tool to streamline the installation process.
* **Enhanced Performance:** Migration of animations from React Native's Animated API to Reanimated 3 for smoother and more efficient rendering.


## Credits 🙏

* [Xavier Carpentier](https://github.com/xcarpentier)
* [shadcn/ui](https://github.com/shadcn-ui/ui)



