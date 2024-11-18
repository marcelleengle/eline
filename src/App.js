import React from "react";
import capa from './capa.png';
import capa2 from './capa2.jpeg';
import capa3 from './capa3.jpeg';
import './App.css';
import {Accordion, AccordionItem, AccordionItemPanel, AccordionItemHeading, AccordionItemButton} from "react-accessible-accordion";

import 'react-accessible-accordion/dist/fancy-example.css';
import Remember from "./pages/remember/Remember";
import Clima from "./pages/clima/Clima";
import Roupas from "./pages/roupas/Roupas";
import Hotel from "./pages/hotel/Hotel";
import Horarios from "./pages/horarios/Horarios";

function App() {
  return (
        <div className="App">
          <header className="App-header">
            <div className='title-bar'>
              <h1 className='title title-page'>
                Viagem de Aniversário da Eline
              </h1>
            </div>
            <img src={capa2} className="App-home" alt="logo" />
            <img src={capa} className="App-home" alt="logo" />
            <img src={capa3} className="App-home" alt="logo" />
            <p className="title">
              Olá galeraaaa!
            </p>
            <p className="subtitle">Fiz esse guiazinho para ajudar a todos e dar algumas informações sobre essa viagem</p>
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    1. Primeiro vamos falar da nossa aniversariante?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Remember/>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    2. Como vai estar o clima por lá?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Clima/>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    3. Quais roupas levar?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Roupas/>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    4. Casa
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Hotel/>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    5. Horários e Viagem
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Horarios/>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    6. Não esquecer
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div>
                    <h2>Repelente</h2>
                    <h2>Protetor solar</h2>
                    <h1>Presente da aniversariante</h1>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </header>
        </div>

  );
}

export default App;
