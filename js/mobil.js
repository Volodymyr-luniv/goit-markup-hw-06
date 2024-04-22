(() => {
	const refs = {
		// Додати атрибут data-modal-open на кнопку відкриття
		openMobilBtn: document.querySelector("[data-mobil-open]"),
		// Додати атрибут data-modal-close на кнопку закриття
		closeMobilBtn: document.querySelector("[data-mobil-close]"),
		// Додати атрибут data-modal на бекдроп модалки
		mobil: document.querySelector("[data-mobil]"),
	};

	refs.openMobilBtn.addEventListener("click", toggleMobil);
	refs.closeMobilBtn.addEventListener("click", toggleMobil);

	function toggleMobil() {
		// is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
		refs.mobil.classList.toggle("is-open-mobil");
	}
})();
