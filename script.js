document.addEventListener('DOMContentLoaded',() =>{
    const souris=document.querySelector('.souris');
    document.addEventListener('mousemove',(e) =>{
        requestAnimationFrame(() =>{
            souris.style.left=e.clientX+'px'
            souris.style.top=e.clientY+'px'
        });
    });
    document.addEventListener('mousedown', () => {
        souris.style.backgroundImage="url('../img/dessin/sourisclik.png')"
    });
    document.addEventListener('mouseup', () => {
        souris.style.backgroundImage="url('../img/dessin/souris.png')"
    });
});



function header(H){
    let h= document.getElementById(H);
    h.innerHTML=`
        <img src="./img/dessin/enluminure.png" class="coin_hg" width="300px" height="300px" alt=""/>
        <img src="./img/dessin/enluminure.png" class="droite" width="300px" height="300px" alt=""/>
        <div class="header">
            <a class="btn" href="#projet">Projets</a>
            <a href="/Portfolio"><img class="btn_accueil" src="./img/dessin/accueil.png"/></a>
            <a class="btn" href="#contact">Contact&CV</a>
        </div>
        <style>
            .btn{
                font-size: 1rem;
                margin: 1rem;
                text-decoration: none;
                color: #000000;
                transition-duration: 1s;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                @media screen and (max-width : 1024px){
                    margin:0.5rem;
                }
                @media screen and (max-width : 601px){
                    font-size: 0.8rem
                }
            }
            .btn:hover{
                transition-duration: 1s;
                color: #bc0808;
                text-decoration: underline;
            }
            .btn_accueil{
                width: 100px ;
                height: 100px ;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                @media screen and (max-width : 800px){
                    width: 75px;
                    height: 75px;
                }
                @media screen and (max-width : 400px){
                    width: 50px;
                    height: 50px;
                }
            }
            .droite{
                float: right;
                @media screen and (max-width : 1024px){
                    width: 150px;
                    height: 150px;
                }
                @media screen and (max-width : 601px){
                    width: 75px;
                    height: 75px;
                }
            }
            .coin_hg{
                float: left;
                rotate: 270deg;
                @media screen and (max-width : 1024px){
                    width: 150px;
                    height: 150px;
                }
                @media screen and (max-width : 601px){
                    width: 75px;
                    height: 75px;
                }
            }
            .header{
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin: 1rem;
                margin-bottom: 10rem;
            }
        </style>`
};

function footer(F){
    let f=document.getElementById(F);
    f.innerHTML=`
        <div id="contact" class="footer">
            <img src="./img/dessin/enluminure.png" class="coin_bg" width="300px" height="300px" alt=""/>
            <div class="boit_info">
                <a class="btn_infos" href="./img/CV.pdf">Mon CV</a>
                <a class="infos">brunjulian6@gmail.com</a>
                <a class="infos">06 31 44 44 62</a>
            </div>
            <img src="./img/dessin/enluminure.png" class="coin_bd" width="300px" height="300px" alt=""/>
        </div>
        
        
        <style>
            .coin_bg{
                float: left;
                rotate:180deg ;
                @media screen and (max-width : 1024px){
                    width: 150px;
                    height: 150px;
                }
                @media screen and (max-width : 601px){
                    width: 100px;
                    height: 100px;
                }
                @media screen and (max-width : 361px){
                    width: 80px;
                    height: 80px;
                }
            }
            .coin_bd{
                float: right;
                rotate: 90deg;
                @media screen and (max-width : 1024px){
                    width: 150px;
                    height: 150px;
                }
                @media screen and (max-width : 601px){
                    width: 100px;
                    height: 100px;
                }
                @media screen and (max-width : 361px){
                    width: 80px;
                    height: 80px;
                }
            }
            .boit_info{
                display: flex;
                flex-dircetion: row;
                justify-content: space-around;
                align-items: center;
                text-align: center;
                @media screen and (max-width : 701px){
                    flex-direction: column;
                    justify-content: center;
                }
            }
            .infos{
                margin: 1rem;
                font-size: 1rem;
                color: #bc0808;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                @media screen and (max-width : 701px){
                    margin: 0rem;
                    margin-top: 1rem;
                    font-size: 1rem;
                }
            }
            .btn_infos{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 1rem;
                color: #fffff0;
                margin: 1rem;
                background-color: #bc0808;
                text-decoration: none;
                border: 1px solid #bc0808;
                padding: 0.5rem;
                border-radius: 10px;
                transition-duration: 1s;
                @media screen and (max-width : 701px){
                    margin: 0rem;
                    font-size: 1rem;
                }
            }
            .btn_infos:hover{
                transition-duration: 1s;
                background-color: #fffff0;
                color: #bc0808;
            }
            .footer{
                display: flex;
                justify-content: space-between;
                align-content: space-between;
                margin-top : 10rem;
            }
        </style>`
};



/* -------------------- car sinon ça passe pas usr tel -------------------- */
function header2(H){
    let h= document.getElementById(H);
    h.innerHTML=`
        <img src="../img/dessin/enluminure.png" class="coin_hg" width="300px" height="300px" alt=""/>
        <img src="../img/dessin/enluminure.png" class="droite" width="300px" height="300px" alt=""/>
        <div class="header">
            <a class="btn" href="../#projet">Projets</a>
            <a href=".."/><img class="btn_accueil" src="../img/dessin/accueil.png"/></a>
            <a class="btn" href="../#contact">Contact&CV</a>
        </div>
        <style>
            .btn{
                font-size: 1rem;
                margin: 1rem;
                text-decoration: none;
                color: #000000;
                transition-duration: 1s;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                @media screen and (max-width : 1024px){
                    margin:0.5rem;
                }
                @media screen and (max-width : 601px){
                    font-size: 0.8rem
                }
            }
            .btn:hover{
                transition-duration: 1s;
                color: #bc0808;
                text-decoration: underline;
            }
            .btn_accueil{
                width: 100px ;
                height: 100px ;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                @media screen and (max-width : 800px){
                    width: 75px;
                    height: 75px;
                }
                @media screen and (max-width : 400px){
                    width: 50px;
                    height: 50px;
                }
            }
            .droite{
                float: right;
                @media screen and (max-width : 1024px){
                    width: 150px;
                    height: 150px;
                }
                @media screen and (max-width : 601px){
                    width: 75px;
                    height: 75px;
                }
            }
            .coin_hg{
                float: left;
                rotate: 270deg;
                @media screen and (max-width : 1024px){
                    width: 150px;
                    height: 150px;
                }
                @media screen and (max-width : 601px){
                    width: 75px;
                    height: 75px;
                }
            }
            .header{
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin: 1rem;
                margin-bottom: 10rem;
            }
        </style>`
};

function footer2(F){
    let f=document.getElementById(F);
    f.innerHTML=`
        <div id="contact" class="footer">
            <img src="../img/dessin/enluminure.png" class="coin_bg" width="300px" height="300px" alt=""/>
            <div class="boit_info">
                <a class="btn_infos" href="./img/CV.pdf">Mon CV</a>
                <a class="infos">brunjulian6@gmail.com</a>
                <a class="infos">06 31 44 44 62</a>
            </div>
            <img src="../img/dessin/enluminure.png" class="coin_bd" width="300px" height="300px" alt=""/>
        </div>
        
        
        <style>
            .coin_bg{
                float: left;
                rotate:180deg ;
                @media screen and (max-width : 1024px){
                    width: 150px;
                    height: 150px;
                }
                @media screen and (max-width : 601px){
                    width: 100px;
                    height: 100px;
                }
                @media screen and (max-width : 361px){
                    width: 80px;
                    height: 80px;
                }
            }
            .coin_bd{
                float: right;
                rotate: 90deg;
                @media screen and (max-width : 1024px){
                    width: 150px;
                    height: 150px;
                }
                @media screen and (max-width : 601px){
                    width: 100px;
                    height: 100px;
                }
                @media screen and (max-width : 361px){
                    width: 80px;
                    height: 80px;
                }
            }
            .boit_info{
                display: flex;
                flex-dircetion: row;
                justify-content: space-around;
                align-items: center;
                text-align: center;
                @media screen and (max-width : 701px){
                    flex-direction: column;
                    justify-content: center;
                }
            }
            .infos{
                margin: 1rem;
                font-size: 1rem;
                color: #bc0808;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                @media screen and (max-width : 701px){
                    margin: 0rem;
                    margin-top: 1rem;
                    font-size: 1rem;
                }
            }
            .btn_infos{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 1rem;
                color: #fffff0;
                margin: 1rem;
                background-color: #bc0808;
                text-decoration: none;
                border: 1px solid #bc0808;
                padding: 0.5rem;
                border-radius: 10px;
                transition-duration: 1s;
                @media screen and (max-width : 701px){
                    margin: 0rem;
                    font-size: 1rem;
                }
            }
            .btn_infos:hover{
                transition-duration: 1s;
                background-color: #fffff0;
                color: #bc0808;
            }
            .footer{
                display: flex;
                justify-content: space-between;
                align-content: space-between;
                margin-top : 10rem;
            }
        </style>`
};
