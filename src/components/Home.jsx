import { lazy, Suspense } from "react";
import "./Home.css";
import { ReactTyped } from "react-typed";

const Reveal = lazy(() => import("./Reveal"));

const Home = () => {
  return (
    <section id="home" className="container home">
      <div className="text-contents">
        <h1 className="home-title">
          <span className="greeting">Hi, My name is Abraham,</span>
          <br />
          <span className="intro-text">I&apos;m a</span> <br />
          <div className="typing-container">
            <ReactTyped
              backSpeed={50}
              loop={true}
              className="fancy-text"
              onBegin={function noRefCheck() {}}
              onComplete={function noRefCheck() {}}
              onDestroy={function noRefCheck() {}}
              onLastStringBackspaced={function noRefCheck() {}}
              onReset={function noRefCheck() {}}
              onStart={function noRefCheck() {}}
              onStop={function noRefCheck() {}}
              onStringTyped={function noRefCheck() {}}
              onTypingPaused={function noRefCheck() {}}
              onTypingResumed={function noRefCheck() {}}
              strings={[
                '<span className="fancy-text">Fullstack</span><br /><span className="fancy-text">Software</span><br /><span className="fancy-text">Developer<span className="dot">.</span></span>',
                '<span className="fancy-text">Frontend</span><br /><span className="fancy-text">Web</span><br /><span className="fancy-text">Developer<span className="dot">.</span></span>',
                '<span className="fancy-text">Backend</span><br /><span className="fancy-text">Web</span><br /><span className="fancy-text">Developer<span className="dot">.</span></span>',
                '<span className="fancy-text">Wordpress</span><br /><span className="fancy-text">Developer<span className="dot">.</span></span>',
                '<span className="fancy-text">Shopify</span><br /><span className="fancy-text">Expert<span className="dot">.</span></span>',
              ]}
              typeSpeed={50}
              typedRef={function noRefCheck() {}}
            />
          </div>
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Reveal side="left">
            <a href="#portfolio" className="home-button">
              Previous Projects
            </a>
          </Reveal>
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Reveal className="hero-img-container" side="right">
          <div>
            <img
              className="hero-img"
              src="/web-images/hero-1-nobg.webp"
              alt="Hero Image"
              loading="lazy"
            />
          </div>
        </Reveal>
      </Suspense>
    </section>
  );
};

export default Home;
