const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-poppins">
      {/* Mesh gradient background */}
      <div className="fixed inset-0 -z-10 mesh-bg" />

      <main className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <div className="fade-in-up delay-1 w-full">
          <section className="relative z-10 flex flex-col items-center text-center px-5 pt-6 pb-6 md:pt-12 md:pb-10">
            <img
              alt="Logo"
              className="w-24 md:w-36 mb-4 md:mb-6 object-contain"
              src="https://static.readdy.ai/image/cfd36e59f048292473ecb14da542f16f/f75c97789ca9f1ab362c49650cc78717.png"
            />
            <p className="text-xs md:text-sm mb-3 font-light" style={{ color: '#999' }}>
              Tudo bem, sem problemas!
            </p>
            <h1
              className="font-playfair font-bold text-2xl md:text-5xl leading-tight mb-3 md:mb-5 max-w-xs md:max-w-2xl"
              style={{ color: '#1a1a1a' }}
            >
              Antes de ir — um presente de R$&nbsp;17
            </h1>
            <p className="text-sm md:text-lg max-w-xs md:max-w-xl leading-relaxed" style={{ color: '#444' }}>
              Toda vez que você pegar o celular, vai se lembrar do que é realmente importante.
            </p>
          </section>
        </div>

        {/* Product Card */}
        <div className="fade-in-up delay-2 w-full">
          <section className="relative z-10 flex justify-center px-4 md:px-5 pb-8 md:pb-14">
            <div className="w-full max-w-3xl rounded-3xl overflow-hidden glass-card">
              <div className="w-full" style={{ aspectRatio: '16 / 9' }}>
                <img
                  alt="10 Fundos de Tela Motivacionais — Oferta Especial R$ 17,00"
                  className="w-full h-full object-cover object-top"
                  src="https://static.readdy.ai/image/cfd36e59f048292473ecb14da542f16f/885a8f880ebd5891e66b79837e8d50b0.png"
                />
              </div>
              <div className="flex flex-col p-5 md:p-8">
                <h2
                  className="font-playfair font-bold text-xl md:text-3xl mb-1.5 text-center md:text-left"
                  style={{ color: '#1a1a1a' }}
                >
                  10 Fundos de Tela Motivacionais
                </h2>
                <p className="text-sm md:text-base mb-5 text-center md:text-left" style={{ color: '#666' }}>
                  Para a tela de bloqueio do seu iPhone ou Android.
                </p>
                <ul className="flex flex-col gap-3 mb-5">
                  {[
                    '10 imagens com frases que inspiram todo dia',
                    'Paletas vibrantes e femininas',
                    'Formato pronto para iPhone e Android — é só salvar',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-[10px] font-bold check-circle" style={{ color: '#fff' }}>
                        ✓
                      </span>
                      <span className="text-sm md:text-base leading-snug" style={{ color: '#333' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  className="flex items-start gap-2 rounded-lg px-4 py-3"
                  style={{
                    background: 'rgba(255,165,0,0.15)',
                    borderLeft: '4px solid rgb(255,165,0)',
                  }}
                >
                  <span className="text-base flex-shrink-0">📲</span>
                  <p className="text-xs md:text-sm leading-snug" style={{ color: '#cc6600' }}>
                    Digital — você recebe por e-mail e salva no celular na hora.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Pricing Section */}
        <div className="fade-in-up delay-3 w-full">
          <section className="relative z-10 flex justify-center px-4 md:px-5 pb-8 md:pb-14">
            <div className="w-full max-w-lg rounded-3xl px-6 py-8 md:px-12 md:py-14 flex flex-col items-center text-center glass-card-accent">
              <p className="text-base md:text-xl mb-1 line-through" style={{ color: '#999' }}>
                De R$ 37,00
              </p>
              <p
                className="font-playfair font-bold text-5xl md:text-7xl mb-2 md:mb-3 leading-none gradient-text"
                style={{ letterSpacing: '-2px' }}
              >
                R$ 17,00
              </p>
              <p className="text-xs mb-6 md:mb-8 font-light" style={{ color: '#666' }}>
                Acesso imediato&nbsp;•&nbsp;Sem impressão&nbsp;•&nbsp;Só baixar e salvar
              </p>
              <button
                className="w-full cursor-pointer font-bold text-sm md:text-base py-4 px-6 transition-all duration-300 hover:-translate-y-1 active:scale-95 leading-snug gradient-orange-btn"
                style={{
                  color: '#fff',
                  borderRadius: '50px',
                  border: 'none',
                  boxShadow: '0 8px 24px rgba(255,69,0,0.35)',
                  letterSpacing: '0.3px',
                }}
              >
                QUERO OS 10 FUNDOS DE TELA — R$ 17,00
              </button>
            </div>
          </section>
        </div>

        {/* Testimonials */}
        <div className="fade-in-up delay-4 w-full">
          <section className="relative z-10 flex justify-center px-4 md:px-5 pb-8 md:pb-14">
            <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                {
                  text: '"Coloco como fundo toda semana. Me lembra de respirar."',
                  author: '— Camila, 33, SP',
                },
                {
                  text: '"Por R$17 foi a melhor compra. Abro o celular e já sorrio."',
                  author: '— Débora, 38, MG',
                },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl px-5 py-4 md:px-6 md:py-5 glass-testimonial">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-base" style={{ color: 'rgb(255,107,0)' }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm md:text-base leading-relaxed mb-2" style={{ color: '#333' }}>
                    {t.text}
                  </p>
                  <p className="text-xs md:text-sm font-semibold" style={{ color: '#666' }}>
                    {t.author}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <div className="fade-in-up delay-5 w-full">
          <section className="relative z-10 flex flex-col items-center text-center px-4 md:px-5 pb-10 md:pb-20 gap-4 md:gap-5">
            <button
              className="w-full max-w-sm cursor-pointer font-bold text-sm md:text-base py-4 px-6 transition-all duration-300 hover:-translate-y-1 active:scale-95 leading-snug gradient-orange-btn"
              style={{
                color: '#fff',
                borderRadius: '50px',
                border: 'none',
                boxShadow: '0 8px 24px rgba(255,69,0,0.35)',
                letterSpacing: '0.3px',
              }}
            >
              QUERO OS 10 FUNDOS DE TELA — R$ 17,00
            </button>
            <p className="text-xs md:text-sm max-w-xs" style={{ color: '#666' }}>
              🛡️ Garantia de 7 dias — 100% do valor devolvido sem perguntas.
            </p>
            <a
              href="#"
              className="text-xs cursor-pointer transition-opacity duration-200 hover:opacity-100 underline font-light"
              style={{ color: '#999', opacity: 0.6 }}
            >
              Não, obrigada. Prefiro sair sem o bônus.
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
