import { useHistory } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Google Icon" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button>
              <img src="" alt="" />
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
