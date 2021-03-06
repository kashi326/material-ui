import * as React from 'react';
import { SxProps } from '@material-ui/system';
import { Theme } from '../styles';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';

export type GridItemsAlignment = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

export type GridContentAlignment =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around';

export type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type GridSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type GridJustification =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type GridSize = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridClassKey = keyof NonNullable<GridTypeMap['props']['classes']>;

export interface GridTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Defines the `align-content` style property.
     * It's applied for all screen sizes.
     * @default 'stretch'
     */
    alignContent?: GridContentAlignment;
    /**
     * Defines the `align-items` style property.
     * It's applied for all screen sizes.
     * @default 'stretch'
     */
    alignItems?: GridItemsAlignment;
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: {
      /** Styles applied to the root element. */
      root?: string;
      /** Styles applied to the root element if `container={true}`. */
      container?: string;
      /** Styles applied to the root element if `item={true}`. */
      item?: string;
      /** Styles applied to the root element if `zeroMinWidth={true}`. */
      zeroMinWidth?: string;
      /** Styles applied to the root element if `direction="column"`. */
      'direction-xs-column'?: string;
      /** Styles applied to the root element if `direction="column-reverse"`. */
      'direction-xs-column-reverse'?: string;
      /** Styles applied to the root element if `direction="row-reverse"`. */
      'direction-xs-row-reverse'?: string;
      /** Styles applied to the root element if `wrap="nowrap"`. */
      'wrap-xs-nowrap'?: string;
      /** Styles applied to the root element if `wrap="reverse"`. */
      'wrap-xs-wrap-reverse'?: string;
      /** Styles applied to the root element if `alignItems="center"`. */
      'align-items-xs-center'?: string;
      /** Styles applied to the root element if `alignItems="flex-start"`. */
      'align-items-xs-flex-start'?: string;
      /** Styles applied to the root element if `alignItems="flex-end"`. */
      'align-items-xs-flex-end'?: string;
      /** Styles applied to the root element if `alignItems="baseline"`. */
      'align-items-xs-baseline'?: string;
      /** Styles applied to the root element if `alignContent="center"`. */
      'align-content-xs-center'?: string;
      /** Styles applied to the root element if `alignContent="flex-start"`. */
      'align-content-xs-flex-start'?: string;
      /** Styles applied to the root element if `alignContent="flex-end"`. */
      'align-content-xs-flex-end'?: string;
      /** Styles applied to the root element if `alignContent="space-between"`. */
      'align-content-xs-space-between'?: string;
      /** Styles applied to the root element if `alignContent="space-around"`. */
      'align-content-xs-space-around'?: string;
      /** Styles applied to the root element if `justifyContent="center"`. */
      'justify-content-xs-center'?: string;
      /** Styles applied to the root element if `justifyContent="flex-end"`. */
      'justify-content-xs-flex-end'?: string;
      /** Styles applied to the root element if `justifyContent="space-between"`. */
      'justify-content-xs-space-between'?: string;
      /** Styles applied to the root element if `justifyContent="space-around"`. */
      'justify-content-xs-space-around'?: string;
      /** Styles applied to the root element if `justifyContent="space-evenly"`. */
      'justify-content-xs-space-evenly'?: string;
      'spacing-xs-1'?: string;
      'spacing-xs-2'?: string;
      'spacing-xs-3'?: string;
      'spacing-xs-4'?: string;
      'spacing-xs-5'?: string;
      'spacing-xs-6'?: string;
      'spacing-xs-7'?: string;
      'spacing-xs-8'?: string;
      'spacing-xs-9'?: string;
      'spacing-xs-10'?: string;
      'grid-xs-auto'?: string;
      'grid-xs-true'?: string;
      'grid-xs-1'?: string;
      'grid-xs-2'?: string;
      'grid-xs-3'?: string;
      'grid-xs-4'?: string;
      'grid-xs-5'?: string;
      'grid-xs-6'?: string;
      'grid-xs-7'?: string;
      'grid-xs-8'?: string;
      'grid-xs-9'?: string;
      'grid-xs-10'?: string;
      'grid-xs-11'?: string;
      'grid-xs-12'?: string;
    };
    /**
     * If `true`, the component will have the flex *container* behavior.
     * You should be wrapping *items* with a *container*.
     * @default false
     */
    container?: boolean;
    /**
     * Defines the `flex-direction` style property.
     * It is applied for all screen sizes.
     * @default 'row'
     */
    direction?: GridDirection;
    /**
     * If `true`, the component will have the flex *item* behavior.
     * You should be wrapping *items* with a *container*.
     * @default false
     */
    item?: boolean;
    /**
     * Defines the `justify-content` style property.
     * It is applied for all screen sizes.
     * @default 'flex-start'
     */
    justifyContent?: GridJustification;
    /**
     * Defines the number of grids the component is going to use.
     * It's applied for the `lg` breakpoint and wider screens if not overridden.
     * @default false
     */
    lg?: boolean | GridSize;
    /**
     * Defines the number of grids the component is going to use.
     * It's applied for the `md` breakpoint and wider screens if not overridden.
     * @default false
     */
    md?: boolean | GridSize;
    /**
     * Defines the number of grids the component is going to use.
     * It's applied for the `sm` breakpoint and wider screens if not overridden.
     * @default false
     */
    sm?: boolean | GridSize;
    /**
     * Defines the space between the type `item` component.
     * It can only be used on a type `container` component.
     * @default 0
     */
    spacing?: GridSpacing;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * Defines the `flex-wrap` style property.
     * It's applied for all screen sizes.
     * @default 'wrap'
     */
    wrap?: GridWrap;
    /**
     * Defines the number of grids the component is going to use.
     * It's applied for the `xl` breakpoint and wider screens.
     * @default false
     */
    xl?: boolean | GridSize;
    /**
     * Defines the number of grids the component is going to use.
     * It's applied for all the screen sizes with the lowest priority.
     * @default false
     */
    xs?: boolean | GridSize;
    /**
     * If `true`, it sets `min-width: 0` on the item.
     * Refer to the limitations section of the documentation to better understand the use case.
     * @default false
     */
    zeroMinWidth?: boolean;
  };
  defaultComponent: D;
}

/**
 *
 * Demos:
 *
 * - [Grid](https://material-ui.com/components/grid/)
 *
 * API:
 *
 * - [Grid API](https://material-ui.com/api/grid/)
 */
declare const Grid: OverridableComponent<GridTypeMap>;

export type GridProps<
  D extends React.ElementType = GridTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<GridTypeMap<P, D>, D>;

export default Grid;
