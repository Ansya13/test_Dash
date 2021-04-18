class BtnFilter {
    constructor(id) {
        this.btnFilter = $(id);
        this.creatEvents();
    }
    btnActive(event) {
        if (!event||$(event.target).hasClass("b-btn-filter_active")) {
			this.btnFilter.removeClass("b-btn-filter_active");
        }
        else {
            this.btnFilter.addClass("b-btn-filter_active");
        }
    }
    creatEvents() {
    this.btnFilter.click(this.btnActive.bind(this));
	 }
}

let btnFilter = new BtnFilter("#btn-filter")