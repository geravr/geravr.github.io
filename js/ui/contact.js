const contact = (curriculum) => {
const data = curriculum.contact;
    return (
        `<div class="col-sm-12 col-lg-8 about-me contact">
            <h4>Mantente en contacto</h4>
            <div class="row contacts-items">
                ${data.map(
                    ({
                        title,
                        value,
                        icon
                    }) => {
                        return `
                            <div class="col-12 col-md-6 py-3">
                                <div class="contacts-item card-box">
                                    <div class="icon">
                                        <i class="${icon}"></i>
                                    </div>
                                    <div class="name">${title}</div>
                                    <p>
                                        ${value}
                                    </p>
                                </div>
                            </div>
                        `
                    }
                ).join(" ")}
            </div>
        </div>`
    )
};

export default contact;