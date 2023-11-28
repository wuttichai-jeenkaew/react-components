import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <div class="logo">🚀 XYZ CORP</div>
          <ul class="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div class="company-detail-left">
          <h1>Welcome to XYZ Corp</h1>
          <p>Your Trusted Partner in Excellence</p>
          <img src="https://placehold.co/300x300" />
        </div>
        <div class="company-detail-right">
          <h2>About Our Company</h2>
          <p>
            Welcome to XYZ Corp, where excellence meets innovation. We are a
            passionate team dedicated to providing high-quality solutions for
            the technology industry. With a track record of 10 years of success,
            we have become a trusted partner for clients worldwide.
          </p>
          <p>
            Our mission is to empower businesses through cutting-edge
            technology. We believe in integrity, collaboration, and innovation,
            and we strive to make a positive impact on businesses and
            communities alike.
          </p>
          <p>
            At XYZ Corp, we take pride in our commitment to staying at the
            forefront of technological advancements. Our team of experts is
            ready to collaborate with you to tackle your most complex challenges
            and drive your success.
          </p>
          <a href="#" class="learn-button">
            Learn More
          </a>
        </div>
      </main>

      <section className="product-section">
        <div className="product-section-container">
          <h2 className="product-featured-heading">Featured Products</h2>
          <div className="product-card-list">
            <div className="product-card">
              <img
                src="https://placehold.co/300x300"
                alt="The Lorem Ipsum for photos."
              />
              <h3>Premium Bluetooth Headphones</h3>
              <p className="product-price">2,400 Baht</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img
                src="https://placehold.co/300x300"
                alt="The Lorem Ipsum for photos."
              />
              <h3>Classic Leather Watch</h3>
              <p className="product-price">4,000 Baht</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
            <div className="product-card">
              <img
                src="https://placehold.co/300x300"
                alt="The Lorem Ipsum for photos."
              />
              <h3>Organic Green Tea</h3>
              <p className="product-price">79.99 Baht</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 Your Ecommerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
