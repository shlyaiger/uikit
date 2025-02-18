import './SliderPoint.css';

import React, { useEffect, useRef } from 'react';

import { Direction } from '##/components/Popover';
import {
  generateThemeClassNames,
  ThemeContext,
  useTheme,
} from '##/components/Theme';
import { Tooltip } from '##/components/TooltipCanary';
import { useFlag } from '##/hooks/useFlag/useFlag';
import { useForkRef } from '##/hooks/useForkRef/useForkRef';
import { cnMixFocus } from '##/mixs/MixFocus/MixFocus';
import { cn } from '##/utils/bem';

import { SliderPointProps, TrackPosition } from '../helper';

const cnSliderPoint = cn('SliderPoint');

const getTooltipPosition = (
  popoverPosition?: TrackPosition,
  buttonRef?: React.RefObject<HTMLButtonElement>,
) => {
  if (popoverPosition && buttonRef && buttonRef.current) {
    const { y, height } = buttonRef.current.getBoundingClientRect();
    return {
      x: Math.round(popoverPosition.x),
      y: Math.round(y + height / 2),
    };
  }

  return { x: 0, y: 0 };
};

const defaultPossibleDirections: Direction[] = [
  'leftCenter',
  'rightCenter',
  'downCenter',
  'leftDown',
  'rightDown',
  'upCenter',
];

export const SliderPoint = (props: SliderPointProps) => {
  const {
    hovered,
    onHover,
    value,
    position,
    disabled,
    withTooltip,
    focused,
    popoverPosition,
    buttonRef,
    active,
    handlePress,
    onKeyPress,
    tooltipFormatter,
    buttonLabel,
    onFocus,
    tooltipDirection = 'downCenter',
    tooltipPossibleDirections = defaultPossibleDirections,
    tooltipZIndex,
    ...otherProps
  } = props;

  const [tooltipVisible, setTooltipVisible] = useFlag(false);

  const { theme } = useTheme();

  const tooltipTheme = {
    ...theme,
    color: {
      primary: theme.color.invert,
      accent: theme.color.accent,
      invert: theme.color.primary,
    },
  };

  const tooltipThemeClassNames = generateThemeClassNames(tooltipTheme);

  const handleFocus = (
    e: React.FocusEvent<HTMLButtonElement> | React.MouseEvent,
  ) => {
    if (!disabled) {
      onFocus?.(e, buttonLabel);
      setTooltipVisible.on();
    }
  };

  const handleMouseAction = (enter: boolean) => {
    if (!disabled) {
      onHover?.(enter);
      enter && setTooltipVisible.on();
      if (enter) setTooltipVisible.on();
      if (!enter && !focused) setTooltipVisible.off();
    }
  };

  const handleBlur = (
    e:
      | React.FocusEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (!disabled) {
      onFocus?.(e, null);
      setTooltipVisible.off();
    }
  };

  const pointRef = useRef<HTMLButtonElement>(null);

  const tooltipPosition = getTooltipPosition(
    popoverPosition,
    buttonRef || pointRef,
  );

  useEffect(() => {
    focused ? setTooltipVisible.on() : setTooltipVisible.off();
  }, [focused]);

  const tooltipOpen = !!(tooltipVisible && withTooltip && popoverPosition);

  return (
    <>
      <button
        type="button"
        aria-label={`${buttonLabel}-button`}
        className={cnSliderPoint({ hovered, disabled, active }, [
          !disabled ? cnMixFocus() : '',
        ])}
        onMouseOver={() => handleMouseAction(true)}
        onMouseOut={() => handleMouseAction(false)}
        onMouseDown={() => handlePress?.(buttonLabel)}
        onTouchStart={() => handlePress?.(buttonLabel)}
        onKeyDown={(e) => onKeyPress?.(e, buttonLabel)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleFocus}
        ref={useForkRef([buttonRef, pointRef])}
        tabIndex={0}
        style={{
          ['--slider-button-left' as string]: `${position}%`,
        }}
        {...otherProps}
      />

      <ThemeContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          theme: tooltipTheme,
          themeClassNames: tooltipThemeClassNames,
        }}
      >
        <Tooltip
          isOpen={tooltipOpen}
          position={tooltipPosition}
          className={cnSliderPoint('Tooltip')}
          direction={tooltipDirection}
          possibleDirections={tooltipPossibleDirections}
          style={{ zIndex: tooltipZIndex }}
          offset={10}
        >
          {tooltipFormatter ? tooltipFormatter(value) : value}
        </Tooltip>
      </ThemeContext.Provider>
    </>
  );
};
