export default function GameTitle() {
  return (
    <div>
      <h1
        style={{
          margin: "0 auto",
          padding: "2rem",
          textAlign: "center",
          marginTop: "5rem",
          backgroundColor: "rgb(238,174,202)",
          background:
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
          maxWidth: "300px",
          boxShadow:
            "blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px",
          backgroundClip: "text",
          backgroundImage:
            "linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)",
          color: "#000119",
          fontSize: "3vmin",
          fontWeight: 700,
          WebkitTextStrokeColor: "transparent",
        }}
      >
        PJS-TIC-TAC-TOE
      </h1>
    </div>
  );
}
