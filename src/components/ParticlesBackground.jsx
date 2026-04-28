import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      className="absolute inset-0 w-full h-full"
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 50 },
          color: {
            value: ["#7f5af0", "#774ea0", "#FFD67D"],
          },
          opacity: {
            value: { min: 0.4, max: 0.6 },
          },
          size: {
            value: { min: 1, max: 2.5 },
          },
          move: {
            enable: true,
            speed: 0.3,
          },
          links: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
}
