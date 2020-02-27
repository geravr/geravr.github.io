const portfolio = curriculum => {
  const data = curriculum.portfolio;
  return `${data.map(
      ({
        title,
        iconMainTecnology,
        usedTecnology,
        mainTecnology,
        img,
        url,
        github,
        description
      }) => {
        return `<div class="card col-sm-12 col-md-6 col-xl-4">
            <article class="card">
                <div class="thumb">
                    <img src=${img} alt=${title} class="thumb">
                </div>
                <div class="infos row">
                    <div class="card-header col-10 p-0">
                    <h2 class="title">${title}</h2>
                        <p class="item-skill p-0 mt-1">
                        ${usedTecnology.map(tecnology => {
                            return `<span>${tecnology}</span>`;
                          })
                          .join(" ")}
                        </p>
                        </div>
                        <div class="mainTecnology col-2">
                            <i class="flag ${iconMainTecnology} fa-2x"></i>
                            <p>${mainTecnology}</p>
                        </div>
                    
                    <p class="txt col-sm-12">${description}</p>
                    <a href=${url} target="_blank" class="col-sm-6 ">Ver Aplicación</a>
                    <a href=${github} target="_blank" class="col-sm-1 offset-4">
                        <i class="fab fa-github fa-lg"></i>
                    </a>
                </div>
            </article>
        </div>`;
      }
    )
    .join(" ")}
    <div class=" col-12 col-md-7 col-lg-5 mt-5">
        <a href="https://github.com/geravr" target="_blank"><button class="btn">Conoce más de mis proyectos &nbsp;<i class="fab fa-github fa-lg"></i></button></a>
    </div>`
};

export default portfolio;
