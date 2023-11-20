import Accordion from "./accordion-select";
import AccordionBody from "./accordion-select-body";
import AccordionCollapse from "./accordion-select-collapse";
import AccordionHeader from "./accordion-select-header";
import AccordionItem from "./accordion-select-item";
import AccordionInfo from "./accordion-select-info";
import AccordionTeam from "./accordion-select-team";
import AccordionStat from "./accordion-select-stat";
import AccordionFootNote from "./accordion-select-foot-note";

export default Object.assign(Accordion, {
  Header: AccordionHeader,
  Collapse: AccordionCollapse,
  Item: AccordionItem,
  Body: AccordionBody,
  Info: AccordionInfo,
  Team: AccordionTeam,
  Stat: AccordionStat,
  FootNote: AccordionFootNote,
})
