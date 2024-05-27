import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  // const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      // aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="white"
      position={'fixed'}
      top={'4'}
      left={'4'}
      zIndex={'overlay'}
      onClick={toggleColorMode}
      border={'1px'}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;