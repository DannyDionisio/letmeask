import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustration Questions and Answers" />
        <strong>Crie salas de Q&amp;A ao vivo.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Crie uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button>
              <img src="" alt="" />
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <a href="#">Clique aqui</a>
          </p>
        </div>
      </main>
    </div>
  );
}
