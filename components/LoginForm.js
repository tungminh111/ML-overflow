import { Button, DefaultIcon, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
function LoginForm({ onSubmitUserId }) {
  const [userId, setUserId] = useState("");

  let onSubmitId = function (e) {
    e.preventDefault();
    onSubmitUserId(userId);
  };

  return (
    <form onSubmit={onSubmitId}>
      <HStack>
        <Input
          placeholder="Enter your userId"
          size="lg"
          variant="outline"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button type="submit" size="lg">
          Login
        </Button>
      </HStack>
    </form>
  );
}

export default LoginForm;
