function About() {
  return (
    <>
      <div className="h1 text-6xl mb-4">Sobre min</div>
      <p className="mb-4 text-2xl font-light">
        Um aplicativo React para pesquisar perfis do GitHub e ver detalhes do
        perfil. Esse projeto faz parte do curso 
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          React Front To Back
        </a>
        Udemy por
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Versão: <span className="text-gold">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout criado por: 
        <a className="text-gold" href="https://x.com/hassibmoddasser">
          Hassib Moddasser
        </a>
      </p>
    </>
  );
}

export default About;
