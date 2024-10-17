import { runAccordion } from './accordion-controller';
import { runAnimation } from './animation-controller';
import { setNewCopyRightDate, updateYearsOfExperience } from './set-dates';

export default function App() {
  setNewCopyRightDate();
  updateYearsOfExperience();
  runAnimation();
  runAccordion();
}
