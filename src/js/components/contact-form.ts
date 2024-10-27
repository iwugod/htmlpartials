

export default () => ({
    data: {
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    },
    submitBtn: false,
    submit() {
      
        if (this.data.name == '' || this.data.name == undefined && this.data.phoneNumber == '' ||this.data.phoneNumber == undefined && this.data.subject == '' || this.data.subject == undefined && this.data.message == '' ||this.data.message == undefined) {
            this.submitBtn = false;
        }
        else {
            const host = "mailto:test@gmiail.com";
            const link = host
                + "&subject=" + encodeURIComponent(this.data.subject + ' ' + this.data.name + ' ' + this.data.email + ' ' + this.data.phoneNumber)
                + "&body=" + encodeURIComponent(this.data.message);
            window.open(link);
            this.data = {};
        }
    }
})