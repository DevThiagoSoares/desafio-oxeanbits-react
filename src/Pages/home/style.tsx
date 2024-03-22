export const container = {
  margin: "20px",
  display: "flex",
  gap: 3,
  flexDirection: "row",
  flexWrap: "wrap",
};

export const styledButton = (color: string, background: string) => {
  return {
    background: background,
    color: color,
    borderRadius: "20px",
    fontSize: "small",
  };
};

export const cardContainer = {
  with: "412px",
  border: "1px solid #00000029",
};

export const styledCard = {
  position: "absolute",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  color: "white",
  top: 0,
  padding: "10px",
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  pointerEvents: "none",
};
