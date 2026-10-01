import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisBrancoPeto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import { Overlay } from "../Overlay";
import { Button } from "../Button";

// Componente principal da galeria
export const Gallery = () => {
  return (
    <section className="container mb-10">
      <div className="grid gap-2.5 lg:gap-7.5 grid-cols-[1fr_1fr] grid-rows-[repeat(5,auto)] [grid-template-areas:'highlight_highlight'_'sneaker-white_sneaker-white'_'model_sneaker-color'_'model_sneaker-silver'_'sneaker-purple_sneaker-purple'] lg:grid-cols-[repeat(4,1fr)] lg:grid-rows-[repeat(3,300px)] lg:[grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple'_'highlight_highlight_model_sneaker-color'_'sneaker-white_sneaker-white_model_sneaker-silver']">
        {/* Card de destaque: imagem do modelo masculino com overlay de informações e ações */}
        <div className="relative rounded-[20px] overflow-hidden h-105 lg:h-auto group [grid-area:highlight]">
          <img
            src={galeriaHomem}
            alt="Homem sentado com os tênis da SyntaxWear"
            className="w-full h-full object-cover"
          />

          <Overlay
            title="Krypton One"
            subtitle="Estilo urbano com atitude"
            className="inset-0 justify-center"
          >
            <Button variant="secondary">Feminino</Button>
            <Button variant="secondary">Masculino</Button>
          </Overlay>
        </div>

        {/* Imagem do tênis roxo */}
        <div className="relative rounded-[20px] overflow-hidden max-h-47.5 lg:max-h-none [grid-area:sneaker-purple]">
          <img
            src={galeriaTenisRoxo}
            alt="Tênis roxo da SyntaxWear"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagem da modelo feminina */}
        <div className="relative rounded-[20px] overflow-hidden [grid-area:model]">
          <img
            src={galeriaModelo}
            alt="Modelo feminina com os tênis da SyntaxWear"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagem do tênis colorido */}
        <div className="relative rounded-[20px] overflow-hidden [grid-area:sneaker-color]">
          <img
            src={galeriaTenisColorido}
            alt="Tênis colorido da SyntaxWear"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagem do tênis preto e branco */}
        <div className="relative rounded-[20px] overflow-hidden max-h-47.5 lg:max-h-none [grid-area:sneaker-white]">
          <img
            src={galeriaTenisBrancoPeto}
            alt="Tênis preto e branco da SyntaxWear"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagem do tênis cinza */}
        <div className="relative rounded-[20px] overflow-hidden [grid-area:sneaker-silver]">
          <img
            src={galeriaTenisCinza}
            alt="Tênis cinza da SyntaxWear"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
