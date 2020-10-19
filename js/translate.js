// Translate


    
const pl= {
        "home" : "STRONA GŁÓWNA",
        "aboutUs" : "O NAS",
        "fieldOfWork" : "ZAKRES DZIAŁAŃ",
        "fieldOfWork1" : "<strong>Projektowanie</strong>, <strong>wykonawstwo</strong> oraz <strong>koordynacja</strong> projektów w zakresie:",
        "fieldOfWork2" : "Nasza oferta skupia się na <strong>trzech głównych</strong> obszarach działalności:",
        "fow1": "Maszyn i urządzeń przemysłowych oraz systemów zrobotyzowanych",
        "fow2": "Produkcja komponentów automatyki i bezpieczeństwa",
        "fow3": "Systemów chłodzenia urządzeń przemysłowych",
        "fow4": "Analizy procesów przemysłowych",
        "fow5": "Konstrukcji stalowych",
        "fow6": "Budowa nowych maszyn i urządzeń",
        "fow7": "Modernizacje, dostosowanie istniejących stanowisk (zmiana detalu, wymogi bezpieczeństwa, zmiana cyklu)",
        "fow8":  "Relokacje linii i maszyn wewnętrzne i pomiędzy zakładami, serwis konserwacyjny i awaryjny",
        "contact" : "KONTAKT",
        "contact1" : "Adres:",
        "contact2" : "ul. Okulickiego 50",
        "aboutUs1" : "<strong>VR Dynamics Sp. z o.o.</strong> tworzy grupa ambitnych inżynierów, których łączy innowacyjność, doświadczenie i wiedza. Sprawne działanie, zaangażowanie i ciekawość nowych technologii umożliwia nam wdrażanie do przemysłu nowoczesnych rozwiązań z zakresu automatyki, elektroniki i mechaniki. Jesteśmy w stanie zrealizować również te najbardziej nietypowe rozwiązania.",
        "aboutUs2" : "Nasza firma jest synonimem jakości, elastyczności i niezawodności. Naszym klientom oferujemy nie tylko usługi projektowe i wykonawcze, ale także wsparcie przy wdrażaniu nowych ciekawych projektów nie tylko dla przemysłu.",
        "formHeader" : "Skontaktuj się z Nami!",
        "formName" : "Twoje Imię *",
        "formEmail" : "Twój email *",
        "formSubject" : "Temat",
        "formMessage" : "Treść",
        "formSend" : "Wyślij"
    }

    const en = {
        "home" : "HOME",
        "aboutUs" : "ABOUT US",
        "fieldOfWork" : "WHAT WE DO",
        "fieldOfWork1" : "<strong>Design</strong>, <strong>implementation</strong> and <strong>coordination</strong> of projects in the field of:",
        "fieldOfWork2" : "Our offer focuses on <strong>three main</strong> areas of activity:",
        "fow1": "Industrial machines and devices, robotized systems",
        "fow2": "Production of automation and security components",
        "fow3": "Cooling systems for industrial equipment",
        "fow4": "Analysis of industrial processes",
        "fow5": "Steel constructions",
        "fow6": "New machines and devices construction",
        "fow7": "Modernization, adaptation of existing stations (change of detail, safety requirements, cycle change)",
        "fow8":  "Relocations lines and machines, internal and between plants, maintenance and emergency service",
        "contact" : "CONTACT",
        "contact1" : "Address:",
        "contact2" : "Okulickiego 50 street",
        "aboutUs1" : "<strong>VR Dynamics Sp. z o.o.</strong> creates a group of ambitious engineers who are connected by innovation, experience and knowledge. Efficient operation, commitment and curiosity of new technologies enables us to implement modern solutions in the field of automation, electronics and mechanics. We are also able to implement the most unusual solutions.",
        "aboutUs2" : "Our company is synonymous with quality, flexibility and reliability. We offer our clients not only design and implementation services, but also support in the implementation of new interesting projects not only for industry.",
        "formHeader" : "Contact Us!",
        "formName" : "Your Name *",
        "formEmail" : "Your email *",
        "formSubject" : "Subject",
        "formMessage" : "Message",
        "formSend" : "Send"
    }

// let x= document.querySelector('.lang').getAttribute('key');
// console.log(language.en['formSend'])
// document.querySelector('.lang').innerHTML=language.en[x]
const btn = document.querySelectorAll('.language button').forEach((language,index)=> {
    language.addEventListener('click', () => {
        
        document.querySelectorAll('.lang').forEach(function(item) {
            let txt = item.getAttribute('key');

            if(index === 1) {
                item.innerHTML= en[txt];
            }
            else if (index === 0) {
                item.innerHTML= pl[txt];
            }
        })
        
    })
});
