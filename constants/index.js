import { StyleSheet } from "react-native";

const COLORS = {
    primaryBackground: "#0B0B0B",
    secondaryBackground: "rgb(80, 80, 80)",
    tertiaryBackground: "rgb(15, 15, 15)",
}

export const STYLES = {
      text: {
          standard: {
              fontSize: 15,
              letterSpacing: -0.5,
              color: "#fff",
          },
          secondary: {
              opacity: 0.7,
              color: "#999999",
          },
          borrow: {
                color: "#C553C3",
          },
          deposit: {
              color: "#30C9E1",
          },
          header: {
              fontSize: 22,
          },
          success: {
            color: "green",
          },
          fail: {
            color: "red",
          },
          warning: {
            color: "yellow",
          },
      },
      spacing: {
          padding: 15,
      },
      tokenRow: {
          height: 70,
      },
      input: {
          standard: {
              height: 50,
              minWidth: 140,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#555555",
              color: "#fff",
              paddingHorizontal: 5,
          },
          deposit: {
              borderColor: "#30C9E1",
          },
          borrow: {
              borderColor: "#C553C3",
          },
      },
      button: {
          height: 45,
      },
      secondaryButton: {
        backgroundColor: COLORS.secondaryBackground,
        height: 30, 
      },
      screen: {
          backgroundColor: "#0B0B0B",
          paddingTop: 25,
      },
      container: {
        backgroundColor: COLORS.primaryBackground,
        padding: 15,
        borderRadius: 20
      },
      backgrounds: {
          primaryBackground: COLORS.primaryBackground,
          secondaryBackground: COLORS.secondaryBackground,
          tertiaryBackground: COLORS.tertiaryBackground,
      },
      wrapper: StyleSheet.create({
          deposit: {
              backgroundColor: "rgba(48, 201, 225, 0.2)",
              borderRadius: 6,
              width: 58,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 3,
          },
          borrow: {
              backgroundColor: "rgba(197, 83, 195, 0.2)",
              borderRadius: 6,
              width: 58,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 3,
          },
      }),
};
