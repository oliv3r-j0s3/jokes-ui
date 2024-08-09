import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
@charset "UTF-8";
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

/* General Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Puedes usar space-around, space-evenly, etc. */
  flex-wrap: wrap; /* Para que los cards se ajusten en varias líneas si es necesario */
}

/* Card Container */
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
  background-color: rgb(129, 82, 82);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin: 10px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Card Image */
.card-header {
  width: 100%;
  height: auto;
}

/* Card Content */
.card-content {
  padding: 16px;
}

/* Card Title */
.card-title {
  font-size: 20px;
  margin-bottom: 12px;
  color: #333;
}

/* Card Description */
.card-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}

/* Card Button */
.card-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.card-button:hover {
  background-color: #0056b3;
}
`;
