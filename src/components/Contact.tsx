import SectionTitles from "./SectionTitles";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-section-heading"
      className="flex justify-center p-7 w-full mb-10"
    >
      <div className="max-w-4xl w-full mbl:max-w-3xl">
        <div className="flex items-center justify-center my-5 mb-12">
          <SectionTitles title="Contato" />
        </div>
        <form
          action="https://formsubmit.co/giovanniclopes@gmail.com"
          className="flex flex-col"
          method="POST"
        >
          <h2 id="contact-section-heading" className="sr-only">
            Formulário de Contato
          </h2>
          <label htmlFor="userName" className="text-lg mb-1 mt-5">
            Seu nome
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="bg-gray-400 rounded-sm px-4 py-3 text-lg text-white placeholder:text-white/20 placeholder:font-light placeholder:text-base focus:border focus:border-red-500 focus:outline-none"
            placeholder="Me diga seu nome"
            required
          />
          <label htmlFor="userEmail" className="text-lg mb-1 mt-5">
            Seu melhor e-mail
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            className="bg-gray-400 rounded-sm px-4 py-3 text-lg text-white placeholder:text-white/20 placeholder:font-light placeholder:text-base focus:border focus:border-red-500 focus:outline-none"
            placeholder="Me diga seu e-mail"
            required
          />
          <label htmlFor="userMessage" className="text-lg mb-1 mt-5">
            Sua mensagem
          </label>
          <textarea
            name="userMessage"
            id="userMessage"
            className="bg-gray-400 rounded-sm px-4 py-3 text-lg text-white placeholder:text-white/20 placeholder:font-light placeholder:text-base focus:border focus:border-red-500 focus:outline-none"
            rows={5}
            placeholder="Olá! Eu gostaria de falar sobre..."
            required
          ></textarea>
          <input type="hidden" name="_template" value="table" />
          <button
            type="submit"
            aria-label="Enviar mensagem"
            className="mt-4 px-4 py-5 border-none bg-red-500 font-bold cursor-pointer rounded transiton-all hover:opacity-75"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
