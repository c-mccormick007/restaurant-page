console.log('index.js connected.')

import { populatePageMain } from "./pageLoad.js";
import { populatePageContact } from "./pageLoadContact.js";
import { populatePageMenu } from "./pageLoadMenu.js";

populatePageMain();
populatePageContact();
populatePageMenu();