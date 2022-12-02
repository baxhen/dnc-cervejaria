function hasMajorityAge(isMajorityAge) {
  hideWelcomeMessage();
  removeChatBoxActionsMessage();
  showHeader();

  if (isMajorityAge) {
    updateChatBoxLabel(
      "Olá! Gostaria de te dar boas vindas a Cervejaria do Pericles. Aqui você encontrará as melhores bebidas do Brasil!"
    );

    showSiteButton();

    return;
  }
  updateChatBoxLabel(
    "Sinto muito, mas este site só é permitido para menores de 18 anos! :("
  );
}

function hideWelcomeMessage() {
  const welcome = document.querySelector(".welcome");

  if (welcome) {
    if (!welcome.className.includes("hidden")) {
      welcome.className = welcome.className += " hidden";
    }
  }
}
function showHeader() {
  const header = document.querySelector(".header");

  if (header) {
    if (header.className.includes("hidden")) {
      header.className = "header";
    }
  }
}
function showSiteButton() {
  const site = document.querySelector("#site");

  if (site) {
    if (site.className.includes("hidden")) {
      site.className = "btn";
    }
  }
}

function removeChatBoxActionsMessage() {
  const chatBoxActions = document.querySelector(".chatbox__actions");
  chatBoxActions.remove();
}

function updateChatBoxLabel(newLabel = "") {
  const chatBoxLabel = document.querySelector(".chatbox__label");

  if (chatBoxLabel) {
    chatBoxLabel.innerHTML = newLabel;
  }
}
