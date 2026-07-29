export default function ScrollIndicator() {
  return (
    <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
        Scroll
      </p>
    </div>
  );
}