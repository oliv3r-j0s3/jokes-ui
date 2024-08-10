import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *::before, *::after {
  box-sizing: inherit;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card-single {
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin: 10px;
}

.card-twopart {
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: rgba(230, 230, 230, 0.56);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin: 10px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-header {
  width: 100%;
  height: auto;
  margin-left: 245px;
}

.card-content {
  padding: 16px;
}

.list-text {
  text-align: justify;
}
`;
