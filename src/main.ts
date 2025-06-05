import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!
const url = new URL(window.location.href);
const params = url.searchParams;
const id = params.get('id') as string;
const result = await fetch(`http://localhost:3000/usuarios/`);
const body = await result.json()
const indexId = parseInt(id) - 1;
console.log(body[indexId].perfil)

app.innerHTML = `
     <style>
          body{
            background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${body[indexId].fundo});
            height: 100vh;
            display: flex;
            justify-content: center;
            background-color: ${body[indexId].corFundo};
            
          }
      </style>
    <div class="container-imagem">
        <div class="img" style="background-image: url(${body[indexId].perfil}); border: ${body[indexId].botaoCor} solid 2px;"></div>
        <p>${body[indexId].nome}</p>
    </div>
    <div class="container-botao">
        <a href="${body[indexId].links[0].url}">
            <div class="botao" style=" background-color: ${body[indexId].botaoCor};">
                <i class="fa-solid fa-wifi" style="color: white;"></i>
                <p>Blog</p>   
            </div>
        </a>
         
        <a href="${body[indexId].links[1].url}">
            <div class="botao" style=" background-color: ${body[indexId].botaoCor};">
                <i class="fa-brands fa-gitlab" style="color: rgba(255, 255, 255, 0.993);"></i>
                <p>GitLab</p>
            </div>
        </a>
        <a href="${body[indexId].links[2].url}">
            <div class="botao" style=" background-color: ${body[indexId].botaoCor};">
            <i class="fa-brands fa-github" style="color: #ffffff;"></i>
            <p>GitHub</p>
            </div>
        </a>
         
        <a href="${body[indexId].links[3].url}">
            <div class="botao" style=" background-color: ${body[indexId].botaoCor};">
                <i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i>
                <p>Linkedin</p>
            </div>
        </a>
        
        <a href="${body[indexId].links[4].url}">
            <div class="botao" style=" background-color: ${body[indexId].botaoCor};">
                <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
                <p>Instagram</p>
            </div>
        </a>

        <a href="${body[indexId].links[5].url}">
            <div class="botao" style=" background-color: ${body[indexId].botaoCor};">
                <i class="fa-regular fa-envelope" style="color: #ffffff;"></i>
                <p>Enviar um e-mail</p>
            </div>
        </a>

    </div>

      <div class="container-qrcode">
        <div class="qrcode-img" style=" background-image: url(${body[indexId].qrcode});"></div>
      </div>
`
