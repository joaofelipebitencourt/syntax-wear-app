// Componente de overlay reutilizável para os cards da galeria.
// Exibe um título, um subtítulo e ações (children) exibidos ao passar o mouse.
interface OverlayProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

export const Overlay = ({
  title,
  subtitle,
  children,
  className = "",
}: OverlayProps) => {
  return (
    <div
      className={`absolute flex flex-col items-center gap-5 bg-black/10 text-center text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 ${className}`}
    >
      <div className="flex flex-col items-center px-6">
        <h2 className="text-sm font-medium tracking-[0.08em]">{title}</h2>
        <p className="text-lg font-medium tracking-[0.08em]">{subtitle}</p>
      </div>

      <div className="flex gap-3.5">{children}</div>
    </div>
  );
};
