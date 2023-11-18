import { Text as RNText, StyleSheet } from 'react-native';

export type TextProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

const styles = StyleSheet.create({
  text: {},
});

export function Text({ text }: TextProps) {
  return (
    <RNText style={styles.text}>
      {text}
    </RNText>
  );
}

