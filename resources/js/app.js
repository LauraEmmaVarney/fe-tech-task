require('./bootstrap');
require('popper.js');


$(document).mouseup(function (e) {
    const container = $("#filter-card");

    if (!container.is(e.target) && container.has(e.target).length === 0 && $(e.target).attr("id") !== "filter-button") {
        container.removeClass("show");
    }
});

$('body').on('show.bs.modal', 'div.modal.remote-modal', function (e) {
    $(this).find('.modal-body').html('<div class="text-center py-3"><i class="fal fa-spinner fa-spin"></i></div>');
    $(this).find('.modal-body').load($(e.relatedTarget).data("remote"));
});
