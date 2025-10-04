const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">About Me</h2>
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            I'm a final-year engineering student with a specialization in <span className="font-semibold text-foreground">data science and artificial intelligence</span>, 
            currently pursuing advanced studies in finance to merge my technical expertise with business acumen.
          </p>
          <p>
            My unique background allows me to approach financial challenges with a <span className="font-semibold text-foreground">quantitative mindset</span>, 
            leveraging machine learning and data analytics to uncover insights that drive strategic business decisions.
          </p>
          <p>
            I'm passionate about the intersection of technology and finance, particularly in areas like 
            <span className="font-semibold text-foreground"> financial modeling, risk analysis, and corporate strategy</span>. 
            My goal is to bring innovative, data-driven solutions to the world of corporate finance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
