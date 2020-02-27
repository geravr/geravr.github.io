const curriculum = {
                    profile: {
                        name: "Gerardo Villa",
                        profesionalTitle: "Frontent Developer",
                        socialNetwork: {
                            linkedin: "https://www.linkedin.com/in/gerardovr/",
                            github: "https://github.com/geravr"
                        },
                        aboutMe: {
                            "title": "Hola!",
                            "description": "Soy Gerardo Villa, un desarrollador frontend autodidacta, a quien le encanta explorar y experimentar para mejorar lo existente. Mi camino hacia este campo fue definido por mi pasión en la tecnología, y un poco de curiosidad hacia el código. Estoy ansioso por aprender cosas nuevas que me mejoren y me ayuden a destacar entre la multitud."
                        },
                        age: "28",
                        country: "México",
                        address: "Loma Bonita, Zapopan",
                        mail: "gerardovilla212@gmail.com",
                        phone: "+52 33 2497 6255"
                    },
                    resume: {
                        workExperience: [
                            {
                                title: "Clon de Product Hunt",
                                company: "Proyecto personal - en proceso",
                                date: "Enero 2020",
                                usedTecnology: ["Next.js","Context API","Firebase","Hooks"],
                                url: "https://producthunt-clone.netlify.com/",
                                description: "Aplicación basada en el sitio producthunt con las siguientes características: Registro y login de usuarios, creación de productos a usuarios registrados, votos, comentarios, búsqueda, listado de productos y populares."
                            },
                            {
                                title: "Control de gastos",
                                company: "Proyecto personal",
                                date: "Diciembre 2019",
                                usedTecnology: ["CRA","Hooks","Local Storage"],
                                url: "https://controlgastos.netlify.com/",
                                description: "Aplicación básica para administrar ingresos y gastos almacenando datos en local storage. Características: Presupuesto inicial, agregar/eliminar ingresos adicionales, agregar/eliminar gastos y reestablecer todos los datos."
                            },
                            {
                                title: "Criptocotizador",
                                company: "Proyecto personal",
                                date: "Diciembre 2019",
                                usedTecnology: ["CRA","Hooks","Axios","API"],
                                url: "https://criptocotizador.netlify.com/",
                                description: "Cotizador de criptomonedas más populares a distintos tipos de monedas nacionales, a través de un formulario, consumiento la API de cryptocompare.com."
                            }
                        ],
                        training: [
                            {
                                title: "Cinta Roja – Dev.f",
                                company: "Curso presencial",
                                date: "Noviembre 2019",
                                usedTecnology: [],
                                description: "Curso de 60+ horas presencial, donde reforcé bases de ES6+ y realicé prácticas con React JS Hooks, Node JS y MongoDB. El curso estuvo mayormente enfocado a React, y sentar bases de Node y Mongo para desarrollar un proyecto donde integré la 3 tecnologías."
                            },
                            {
                                title: "Closures y Scope en JavaScript",
                                company: "E-Learning - Platzi",
                                date: "Febrero 2020",
                                usedTecnology: [],
                                description: ""
                            },
                            {
                                title: "React JS",
                                company: "E-Learning - Udemy",
                                date: "Septiembre 2019",
                                usedTecnology: [],
                                description: ""
                            },
                            {
                                title: "Fundamentos de JavaScript",
                                company: "E-Learning - Platzi",
                                date: "Agosto 2019",
                                usedTecnology: [],
                                description: ""
                            },
                            {
                                title: "JavaScript Moderno ES6+",
                                company: "E-Learning - Udemy",
                                date: "Junio 2019",
                                usedTecnology: [],
                                description: ""
                            }
                        ],
                        education: [
                            {
                                title: "Lic. En Desarrollo de T.I.",
                                company: "Universidad del Valle de México",
                                date: "Trunca",
                                description: ""
                            },
                            {
                                title: "Bachillerato General",
                                company: "Universidad América Latina",
                                date: "2012 - 2013",
                                description: ""
                            }
                        ],
                        codingSkills: [
                            {
                                skill: "HTML 5",
                                icon: "fab fa-html5"
                            },
                            {
                                skill: "CSS 3",
                                icon: "fab fa-css3-alt"
                            },
                            {
                                skill: "JavaScript ES6+",
                                icon: "fab fa-js"
                            },
                            {
                                skill: "React JS",
                                icon: "fab fa-react"
                            },
                            {
                                skill: "Github",
                                icon: "fab fa-github"
                            },
                            {
                                skill: "Node JS",
                                icon: "fab fa-node-js"
                            }

                        ],
                        proSkills: [
                            {

                            }
                        ],
                        softSkills: [
                            {
                                skill: "Trabajo en equipo",
                                icon: "fas fa-people-carry"
                            },
                            {
                                skill: "Aprendizaje constante",
                                icon: "fas fa-book-reader"
                            },
                            {
                                skill: "Comunicación efectiva",
                                icon: "fas fa-comments"
                            },
                            {
                                skill: "Resolución de problemas",
                                icon: "fas fa-check-circle"
                            }
                        ]
                    },
                    portfolio: [
                        {
                            title: "Criptocotizador",
                            usedTecnology: ["CRA","Hooks","Axios","API"],
                            mainTecnology: "React",
                            iconMainTecnology: "fab fa-react",
                            img: "./image/portfolio/criptoCotizador.jpg",
                            url: "https://criptocotizador.netlify.com/",
                            github: "https://github.com/geravr/criptoCotizador",
                            description: "Cotizador para consultar el tipo de cambio actual de las criptomonedas más populares a distintos tipos de monedas nacionales, usando react hooks y consumiento la API de cryptocompare.com"
                        },
                        {
                            title: "Product Hunt Clon",
                            usedTecnology: ["Next.js","Context API","Firebase","MDBReact"],
                            mainTecnology: "React",
                            iconMainTecnology: "fab fa-react",
                            img: "./image/portfolio/ProductHuntClone.jpg",
                            url: "https://producthunt-clone.netlify.com/",
                            github: "https://github.com/geravr/productHuntClone",
                            description: "Aplicación basada en el sitio producthunt con las siguientes características: Registro y login de usuarios, creación de productos a usuarios registrados, votos, comentarios, búsqueda, listado de productos y populares."
                        },
                        {
                            title: "Control de gastos",
                            usedTecnology: ["CRA","Hooks","Local Storage"],
                            mainTecnology: "React",
                            iconMainTecnology: "fab fa-react",
                            img: "./image/portfolio/controlGastos.jpg",
                            url: "https://controlgastos.netlify.com/",
                            github: "https://github.com/geravr/controlGastos",
                            description: "App para administrar ingresos y gastos, almacenando datos en local storage Características: Presupuesto inicial, agregar/eliminar ingresos adicionales, agregar/eliminar gastos y reestablecer todos los datos."
                        },
                        {
                            title: "Buscador de letras",
                            usedTecnology: ["CRA","Hooks","Axios","API"],
                            mainTecnology: "React",
                            iconMainTecnology: "fab fa-react",
                            img: "./image/portfolio/buscadorLetras.jpg",
                            url: "https://buscadorletracancion.netlify.com/",
                            github: "https://github.com/geravr/buscadorLetraMusicaAPI",
                            description: "Buscador de letras de canciones y biografía de artistas y bandas musicales, utilizando la api de lyrics.ovh para la letra, y theaudiodb.com para la biografía del artista."
                        },
                        {
                            title: "Noticias API",
                            usedTecnology: ["React CC","Fetch","API","Materialize"],
                            mainTecnology: "React",
                            iconMainTecnology: "fab fa-react",
                            img: "./image/portfolio/NoticiasAPI.jpg",
                            url: "https://newsapireact.netlify.com/",
                            github: "https://github.com/geravr/noticiasAPI",
                            description: "Web de noticias recientes hecha con react class component, con form para filtrado por principales categorías de noticias, consumiendo la api de newsapi.org"
                        },
                        {
                            title: "Gasolineras API",
                            usedTecnology: ["JS Vanilla","ES6+","Fetch","API"],
                            mainTecnology: "Vanilla",
                            iconMainTecnology: "fab fa-js",
                            img: "./image/portfolio/GasolinerasAPI.jpg",
                            url: "https://gasolinerasapi.netlify.com/",
                            github: "https://github.com/geravr/gasolinerasAPI",
                            description: "App para consultar ubicación y precios de gasolineas de Guadalajara, Jalisco. Utilizando la api del gobierno api.datos.gob.mx, y el mapa de openstreetmap.org"
                        }
                    ],
                    contact: [
                        {
                            title: "Email",
                            value: "gerardovilla212@gmail.com",
                            icon: "fas fa-at"
                        },
                        {
                            title: "Teléfono",
                            value: "+52 33 2497 6255",
                            icon: "fas fa-phone-alt"
                        },
                        {
                            title: "Skype",
                            value: "gerardovilla212",
                            icon: "fab fa-skype"
                        },
                        {
                            title: "Dirección",
                            value: "Zapopan, Jalisco, México",
                            icon: "fas fa-map-marker-alt"
                        }
                    ]
                }
export default curriculum;