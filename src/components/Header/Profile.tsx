import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Robinson Junior</Text>
          <Text color="gray.300" fontSize="small">
            robinson@email.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Robinson Junior"
        src="https://github.com/hardzork.png"
      />
    </Flex>
  );
}
