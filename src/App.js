import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário</label>
            <input name="github_username" id="github_username" />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/16160637?v=4" alt="Cisino Junior" />
              <div className="user-info">
                <strong>Cisino Junior</strong>
                <span>Java, NodeJs, Angular, Kotlin</span>
              </div>
            </header>

            <p>
              In love by tech.
            </p>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/16160637?v=4" alt="Cisino Junior" />
              <div className="user-info">
                <strong>Cisino Junior</strong>
                <span>Java, NodeJs, Angular, Kotlin</span>
              </div>
            </header>

            <p>
              In love by tech.
            </p>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/16160637?v=4" alt="Cisino Junior" />
              <div className="user-info">
                <strong>Cisino Junior</strong>
                <span>Java, NodeJs, Angular, Kotlin</span>
              </div>
            </header>

            <p>
              In love by tech.
            </p>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/16160637?v=4" alt="Cisino Junior" />
              <div className="user-info">
                <strong>Cisino Junior</strong>
                <span>Java, NodeJs, Angular, Kotlin</span>
              </div>
            </header>

            <p>
              In love by tech.
            </p>
            <a target={"_blank"} href="http://github.com/cisinoJR" >Acessar perfil do Github</a>
          </li>
        </ul>
      </main>
    </div >
  );
}

export default App;
