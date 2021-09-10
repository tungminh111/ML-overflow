import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          borderRadius: props.size === "full" ? "0" : "md"
        }
      })
    },
    Badge: {
      sizes: {
        lg: {
          h: "25px",
          fontSize: "lg",
          px: "20px",
        },
        xl: {
          h: "60px",
          paddingTop: 1,
          fontSize: "4xl",
          px: "50px",
        },
      },
    },
  },
  colors: {},
  global: {
    body: {
      bg: "gray.400",
      color: "white",
    },
    a: {
      color: "teal.500",
      _hover: {
        textDecoration: "underline",
      },
    },
  },
});

export default theme;
