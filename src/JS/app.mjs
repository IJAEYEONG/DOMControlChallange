import * as createElement from "./modules/createElement.js"
import * as appendElemnet from "./modules/appendElement.js"
import * as ElementlD from "./modules/ElementID.js"
// formValidation.setAttribute("class","test")
const root = document.getElementById("root")
const createdElement = createElement.default("div")
const test = document.getElementById("test")
const createEle=createElement.default("div")
ElementlD.default(createdElement,"class","test")
appendElemnet.default(root, createdElement)
appendElemnet.default(test, createEle)
