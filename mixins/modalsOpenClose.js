export const modalsOpenClose = () => ({
    methods: {
        openModal(form) {
            this.$modal.show(form);
        },
        closeModal(data) {
            this.$modal.hide(data);
        },
    },
});
