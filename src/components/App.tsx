import React, { FC } from 'react';
import Recipes from 'src/components/Recipes';

import 'src/styles/main.scss';

const App: FC = () => (
  <>
    <section className="hero" />
    <main>
      <section>
        <h1>Oh Herro, React.</h1>
        <Recipes />
      </section>
    </main>
  </>
);

export default App;
