export function CarouselSlider({ id = "carousel", slides = [] }) {
  return (
    <div
      id={id}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item${index === 0 ? ' active' : ''}`}
          >
            <img
              src={slide.image}
              className="d-block w-100 rounded" 
              alt={slide.alt || `Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
