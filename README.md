- Created new react native project with following command ` npx react-native init VectorIconsTypesscriptError`
- Added latest react-native-vector-icons `yarn add react-native-vector-icons`
- Added latest @types/react-native-vector-icons `yarn add -D @types/react-native-vector-icons`

Rewrote App.ts to be the following:

```
import {StyleProp, TextStyle, View} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';

const IconComponent = ({style}: {style: StyleProp<TextStyle>}) => {
  return <Icon name="some icon name" style={style} />;
};

const App = () => {
  return (
    <View>
      <IconComponent style={undefined} />
    </View>
  );
};

export default App;
```


Got following error on style:

```
No overload matches this call.
  Overload 1 of 2, '(props: IconProps): Icon', gave the following error.
    Type 'import("/Users/thomasgransden/PersonalProjects/VectorIconsTypesscriptError/node_modules/react-native/Libraries/StyleSheet/StyleSheet").StyleProp<import("/Users/thomasgransden/PersonalProjects/VectorIconsTypesscriptError/node_modules/react-native/Libraries/StyleSheet/StyleSheetTypes").TextStyle>' is not assignable to type 'import("/Users/thomasgransden/PersonalProjects/node_modules/@types/react-native/index").StyleProp<import("/Users/thomasgransden/PersonalProjects/node_modules/@types/react-native/index").TextStyle>'.
      Type 'TextStyle' is not assignable to type 'StyleProp<TextStyle>'.
        Type 'import("/Users/thomasgransden/PersonalProjects/VectorIconsTypesscriptError/node_modules/react-native/Libraries/StyleSheet/StyleSheetTypes").TextStyle' is not assignable to type 'import("/Users/thomasgransden/PersonalProjects/node_modules/@types/react-native/index").TextStyle'.
          Types of property 'fontWeight' are incompatible.
            Type '"normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | "ultralight" | "thin" | "light" | "medium" | ... 6 more ... | undefined' is not assignable to type '"normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined'.
              Type '100' is not assignable to type '"normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined'.
  Overload 2 of 2, '(props: IconProps, context: any): Icon', gave the following error.
    Type 'import("/Users/thomasgransden/PersonalProjects/VectorIconsTypesscriptError/node_modules/react-native/Libraries/StyleSheet/StyleSheet").StyleProp<import("/Users/thomasgransden/PersonalProjects/VectorIconsTypesscriptError/node_modules/react-native/Libraries/StyleSheet/StyleSheetTypes").TextStyle>' is not assignable to type 'import("/Users/thomasgransden/PersonalProjects/node_modules/@types/react-native/index").StyleProp<import("/Users/thomasgransden/PersonalProjects/node_modules/@types/react-native/index").TextStyle>'.ts(2769)
index.d.ts(1180, 5): The expected type comes from property 'style' which is declared here on type 'IntrinsicAttributes & IntrinsicClassAttributes<Icon> & Readonly<IconProps>'
index.d.ts(1180, 5): The expected type comes from property 'style' which is declared here on type 'IntrinsicAttributes & IntrinsicClassAttributes<Icon> & Readonly<IconProps>'
```


