export default function Home() {
  return (
    <div style={{
      fontFamily: "Arial",
      background: "linear-gradient(to bottom, #0f0f0f, #1c1c1c)",
      color: "white",
      minHeight: "100vh",
      padding: "40px"
    }}>

      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Rich Fulfilment Catering Services
        </h1>
        <p style={{ color: "#ccc" }}>
          Luxury Ghanaian & International Catering Experience
        </p>
      </div>

      <div style={{
        background: "#222",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px"
      }}>
        <h2>Our Services</h2>
        <ul>
          <li>Western Food Catering</li>
          <li>Local Ghanaian Cuisine</li>
          <li>African & Pan-African Dishes</li>
          <li>Continental & Spanish Inspired Catering</li>
        </ul>
      </div>

      <div style={{
        background: "#333",
        padding: "20px",
        borderRadius: "12px"
      }}>
        <h2>About Us</h2>
        <p>
          We provide premium catering for weddings, events, and private dining experiences
          with a luxury Ghanaian touch.
        </p>
      </div>

    </div>
  );
}
