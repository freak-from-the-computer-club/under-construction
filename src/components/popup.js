const popups = document.querySelectorAll('.popup');
const popupContainers = document.querySelectorAll('.popup__container');
const closeButtons = document.querySelectorAll('.popup__close');

const liceseLink = document.querySelector('.popup__license');
const liceseBadges = document.querySelector('.popup__license_badges');
const popupLicense = document.querySelector('#popupLicense');

const PGPLink = document.querySelector('.popup__PGP');
const popupPGP = document.querySelector('#popupPGP');

function openedPopups(popup) {
  popup.classList.add('popup_opened');
	document.addEventListener('keydown', onKeydown);
}

function closedPopups(popup) {
  popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', onKeydown);
}

function onClickLiceseLink(){
	openedPopups(popupLicense);
}

function onClickPGPLink(){
	openedPopups(popupPGP);
}

function onClickCloseButton(e) {
  closedPopups(e.target.closest('.popup'));
}

//закрытие попапов по клавише escape
function onKeydown(e) {
  if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) {
      closedPopups(openedPopup);
    }
  }
};

function onClickPopupContainer(e) {
  e.stopPropagation();
}

//закрытие попапа кликом по оверлею
popups.forEach( function(popup) {
  popup.addEventListener('click', onClickCloseButton)
});

popupContainers.forEach((popupContainer) => {
  popupContainer.addEventListener('click', onClickPopupContainer);
});

liceseLink.addEventListener('click', onClickLiceseLink);
liceseBadges.addEventListener('click', onClickLiceseLink);
PGPLink.addEventListener('click', onClickPGPLink);
closeButtons.forEach(button => button.addEventListener('click', onClickCloseButton));
