const accordionBtn = document.querySelectorAll('.accordion-btn');

export function runAccordion() {
  accordionBtn.forEach((accButton) => {
    accButton.addEventListener('click', () => {
      togglePanel(accButton, false);
    });
    accButton.addEventListener('keydown', (event) => {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key === ' ') event.preventDefault();
      keyboardEvent.key === 'Enter' || keyboardEvent.key === ' '
        ? togglePanel(accButton, false)
        : '';
    });
  });
}

function togglePanel(accButton: Element, closeCurrentOpen: boolean) {
  let currentOpenPanel = document.getElementsByClassName('open')[0];
  const targetPanelId = accButton.getAttribute('aria-controls') || '';
  const targetPanel = document.getElementById(targetPanelId);
  if (targetPanel) {
    const isOpen = targetPanel.classList.contains('open');
    const panelContent = targetPanel.children[1];
    // if true close last opened panel if one is open
    currentOpenPanel && closeCurrentOpen
      ? currentOpenPanel.classList.remove('open')
      : '';
    targetPanel.classList.toggle('open');
    accButton.setAttribute('aria-expanded', String(!isOpen));
    panelContent.setAttribute('aria-hidden', String(isOpen));
  }
}
