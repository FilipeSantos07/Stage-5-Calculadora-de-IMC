export const alertError = {
    element:document.querySelector(".alert-error"),

    open: function() {
        alertError.element.classList.add("open")
    },

    close: function() {
        alertError.element.classList.remove("open")
    },

}