import textosData from "@/locales/pt.json";
import "./Home.scss";
import tituloLogo from "@/assets/icon/tituloGuarucum.svg";
import SiteLayout from "@/layout/site/SiteLayout";
import { Text } from "@/components/shared/Text/Text";
import { CarouselSlider } from "@/components/shared/CarouselSlider/CarouselSlider";

export const Home = () => {
  const texto = textosData.pageSiteInicio;

  const slidesData = [
    {
      image: "https://cdn.pixabay.com/photo/2019/11/22/13/37/rio-negro-4644907_1280.jpg",
      alt: "Rio Negro",
      caption: "Foto 1: Rio Negro"
    },
    {
      image: "https://cdn.pixabay.com/photo/2019/11/22/13/37/acai-4644906_1280.jpg",
      alt: "Açaí",
      caption: "Foto 2: Açaí"
    },
    {
      image: "https://cdn.pixabay.com/photo/2019/11/22/13/36/ilha-do-mel-4644899_1280.jpg",
      alt: "Ilha do Mel",
      caption: "Foto 3: Ilha do Mel"
    }
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.pexels.com/photos/28587130/pexels-photo-28587130.jpeg"
          alt={texto.secao1ImgAlt1}
          className="bg-img"
        />
        <img
          src={tituloLogo}
          alt={texto.secao1ImgAlt2}
          className="titulo-svg"
        />
      </div>

      {/* Bem-vindo Section */}
      <section className="container mt-5">
        <Text variant="h1" className="text-center uppercase">{texto.secao1Titulo}</Text>
        <Text variant="h2" className="text-center uppercase">{texto.secao1Subtitulo1}</Text>

        <Text>{texto.secao1Paragrafo1}</Text>
        <Text>{texto.secao1Paragrafo2}</Text>
        <Text>{texto.secao1Paragrafo3}</Text>
        <Text>{texto.secao1Paragrafo4}</Text>
        <Text>{texto.secao1Paragrafo5}</Text>
        <Text>{texto.secao1Paragrafo6}</Text>
        <Text>{texto.secao1Paragrafo7}</Text>
        <div className="cards-fotos flex-center">Fotos</div>
      </section>

      {/* Vídeo Pitch */}
      <section className="section-video my-4">
        <div>
          <Text variant="h2" className="text-center mb-4">{texto.secao2Titulo}</Text>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/vHATEmuwsaE?si=8JEWgz82BEgoYc1G"
              title="YouTube video player"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <section className="container">
        <Text variant="h2" className="text-center">{texto.secao3Titulo}</Text>
        <Text>{texto.secao3Paragrafo1}</Text>
        <Text>{texto.secao3Paragrafo2}</Text>
        <Text>{texto.secao3Paragrafo3}</Text>
      </section>
      <section className="container">
        <Text variant="h2" className="text-center">{texto.secao4Titulo}</Text>
        <Text variant="h3" className="text-center">{texto.secao4Subtitulo1}</Text>
        <Text variant="h2">{texto.secao4Subtitulo2}</Text>
        <Text>{texto.secao4Paragrafo1}</Text>
        <ul>
          <li>
            <Text as="span">{texto.secao4Lista1}</Text>
          </li>
          <li>
            <Text as="span">{texto.secao4Lista2}</Text>
          </li>
          <li>
            <Text as="span">{texto.secao4Lista3}</Text>
          </li>
          <li>
            <Text as="span">{texto.secao4Lista4}</Text>
          </li>
        </ul>
        <Text>{texto.secao4Paragrafo2}</Text>
      </section>
      <section className="container">
        <Text variant="h2">{texto.secao5Titulo}</Text>
        <Text>{texto.secao5Paragrafo1}</Text>
        <Text>{texto.secao5Paragrafo2}</Text>
      </section>

      <section className="container my-4" style={{ maxWidth: '800px' }}>
        <CarouselSlider id="carrosselHome" slides={slidesData} />
      </section>

      <section className="container">
        <Text variant="h2">{texto.secao7Titulo}</Text>
        <Text>{texto.secao7Paragrafo1}</Text>
        <Text>{texto.secao7Paragrafo2}</Text>
        <Text variant="h3">{texto.secao7Subtitulo1}</Text>
        <div className="flex-center">
          <a href="#" className="botao paragrafo">
            {texto.secao7Paragrafo3}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}