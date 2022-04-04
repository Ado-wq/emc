import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Våra tjänsteerbjudande</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="src/img/energiförvaltning.jpeg"
              text="Vi ansvarar för driften, skötseln och bevakning av ert värme – och ventilationssystem, samt fastighetens energiåtgång."
              label="Energiförvaltning"
              path="/kontakt"
            />
            <CardItem
              src="/src/img/energirådgivning.jpg"
              text="Vi ger förslag på konkreta energiåtgärder som ger bra resultat, allt från energieffektiv belysning till vattensparande åtgärder."
              label="Energirådgivning"
              path="/kontakt"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="/src/img/energideklaration.png"
              text="Deklarationen är en sammanställning av byggnadens energianvändning och utförs av en certifierad energiexpert. Syftet är att få bättre koll på var energin tar vägen och hitta åtgärder för att minska förbrukningen."
              label="Energideklaration"
              path="/kontakt"
            />
            <CardItem
              src="/src/img/solceller.jpg"
              text="Solenergi är en hållbar energikälla som omvandlar solens energi. Ni tillverkar er egen el samtidigt som ni minskar era elkostnader. För att få ut det bästa av era investeringar i solceller arbetar vi långsiktigt och ser till helheten, från utredning till drift och optimering."
              label="Solceller"
              path="/kontakt"
            />
            <CardItem
              src="/src/img/termografering.jpg"
              text="Tycker medlemmarna att det drar kallt från ytterväggen? Hur blev drevningen av nya fönsterna? Med hjälp av värmekamera kartlägger vi fastighetens klimatskal och jagar energibovar."
              label="Termografering"
              path="/kontakt"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="/src/img/laddplatser.jpg"
              text="Efterfrågan på laddplatser är stor. Vi besöker er gärna och utreder förutsättningarna samt hur man löser finansieringen på bästa sätt. "
              label="Laddplatser"
              path="/kontakt"
            />
            <CardItem
              src="/src/img/Status och projektledning.jpg"
              text="Statusbesiktning är en besiktning som beskriver en byggnads fysiska skick, status och ev. underhållsbehov. Syftet med statusbesiktningen är att samla in och redovisa information om byggnadens fysiska skick samt, där så är möjligt, ange uppskattad livslängd för byggmaterial och konstruktioner."
              label="Termografering"
              path="/kontakt"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards