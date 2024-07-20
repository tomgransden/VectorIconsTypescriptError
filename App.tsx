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
