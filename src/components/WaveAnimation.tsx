
const WaveAnimation = () => {
  return (
    <div className="waveform">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="waveform-bar"
          style={{
            height: `${Math.random() * 40 + 4}px`,
            animationDuration: `${Math.random() * 1 + 0.5}s`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default WaveAnimation;
