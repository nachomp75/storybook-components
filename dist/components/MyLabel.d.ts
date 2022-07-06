/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
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
    /**
     * The color of the label background
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
