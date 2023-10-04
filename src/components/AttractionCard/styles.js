import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
    marginBottom: 12,
  },
  image: {
    width: (width - 96) / 2,
    height: 120,
    borderRadius: 15,
  },
  title: {
    fontWeight: '800',
    fontSize: 12,
    marginTop: 12,
    marginLeft: 6,
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 12,
  },
  icon: {
    width: 8,
    height: 8,
    marginRight: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 6,
    color: 'rgba(0,0,0,0.5)',
  },
});
export default styles;
