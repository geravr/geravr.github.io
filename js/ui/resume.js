const resume = (curriculum) => {
const data = curriculum.resume;

    return (`
        <div class="col-sm-12 col-md-6 about-me">
            <h4 class="title">Experiencia</h4>
                <ul class="timeline">
                    ${data.workExperience.map(({ title, date, company, usedTecnology, url, description }) => {
                      return (`<li class="item-timeline">
                                <h5 class="item-title">${title}</h5>
                                <span class="item-period">${date}</span>
                                <span class="item-company">${
                                  company
                                }</span>
                                <p class="item-skill">Tegnologías usadas:<br> ${usedTecnology.map(
                                  tecnology => {
                                    return `<span>${tecnology}&nbsp;</span>`;
                                  }
                                ).join(' ')}</p>
                                <a href=${url} target="_blank">${
                        url
                      }</a>
                                <p class="item-description">${
                                  description
                                }</p>
                            </li>`);
                    }).join(' ')}
                </ul>
        </div>
            <div class="col s12 m6 about-me">
                <h4 class="title">Formación</h4>
                <ul class="timeline">
                    ${data.training.map(({ title, date, company, description }) => {
                      return `<li class="item-timeline">
                                <h5 class="item-title">${title}</h5>
                                <span class="item-period">${date}</span>
                                <span class="item-company">${company}</span>
                                <p class="item-description">${description}</p>
                            </li>`;
                    }).join(' ')}
                    <h4>Educación</h4>
                    ${data.education.map(({ title, date, company, description }) => {
                      return `<li class="item-timeline">
                                <h5 class="item-title">${title}</h5>
                                <span class="item-period">${date}</span>
                                <span class="item-company">${company}</span>
                                <p class="item-description">${description}</p>
                            </li>`;
                    }).join(' ')}
                </ul>
            </div>
            <div class="col-sm-12 col-md-6 about-me skills">
                <h4 class="title">Coding <strong>Skills</strong></h4>
                <ul class="row m-0 px-0">
                    ${data.codingSkills.map(({ skill, icon }) => {
                        return `<li class="col-4 my-1 py-1">
                        <i class="${icon} fa-3x"></i>
                        <p>${skill}</p>
                    </li>`
                    }).join(' ')}
                </ul>
            </div>
            <div class="col-sm-12 col-md-6 about-me skills soft-skills">
                <h4 class="title">Soft <strong>Skills</strong></h4>
                <ul class="row m-0 px-0">
                    ${data.softSkills.map(({ skill, icon }) => {
                        return `<li class="col-4 my-1 py-1">
                        <i class="${icon} fa-3x"></i>
                        <p>${skill}</p>
                    </li>`
                    }).join(' ')}
                </ul>
            </div>
        `)
}
export default resume;