import './mylabel.css';

interface MyLabelProps {
  /**
   * The text to display
   */
  label: string;

  /**
   * The size of the text
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Set to true to display the text in all caps
   */
  allCaps?: boolean;

  /**
   * The color of the text
   */
  color?: 'primary' | 'secondary' | 'tertiary';

  /**
   * The color of the font
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >{`${allCaps ? label.toUpperCase() : label}`}</span>
  );
};
