import { useColorMode, Switch, HStack, FormLabel } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <HStack
      position="absolute"
      top={["1.1rem", null, "1.75rem"]}
      right="1rem"
      zIndex="banner"
      align="center"
      spacing="2"
    >
      <Switch
        id="darkmode-toggle"
        colorScheme="purple"
        isChecked={isDark}
        onChange={toggleColorMode}
        _focus={{
          boxShadow: 0,
        }}
      />
      <FormLabel htmlFor="darkmode-toggle" pb="1">
        {isDark ? (
          <MoonIcon color="primary.300" />
        ) : (
          <SunIcon color="primary.500" />
        )}
      </FormLabel>
    </HStack>
  );
};
