const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">About Me</h2>
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-justify">
          <p>
            {/* I'm a final-year engineering student with a specialization in <span className="font-semibold text-foreground">data science and artificial intelligence</span>, 
            currently pursuing advanced studies in finance to merge my technical expertise with business acumen. */}
            Recently graduated from my engineering school in computer science and Artifical Intelligence, I am now pursuing a master in finance at <span className="font-semibold text-foreground">Université Paris-Dauphine - PSL</span>. More precisely, I aim to start a career in corporate finance, combining my technical background with my interest in financial analysis, business strategy and investment.
          </p>
          <p>
            My unique background allows me to approach financial challenges with an <span className="font-semibold text-foreground">analytic and quantitative mindset</span>.
          </p>
          <p>
            I enjoy learning, taking on new challenges, working in a fast-pace environment, and understanding how finance drives companies' growth and decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
