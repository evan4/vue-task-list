class Form {
    constructor(){
        this.descMaxLength = 2048;
    }
    checkDate(val) {
        let today = new Date(),
            myDate = new Date(val);

        myDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        return (myDate.getTime() >= today.getTime()) ? true : false;
    }
    checkForm(form) {
        let errors = [];

        if (!form.name) {
            errors.push('Task name required.');
        }
        if (!form.desc) {
            errors.push('Task body required.');
        } else if (form.desc.length > this.descMaxLength) {
            errors.push('Max length must be less than 2048 characters');
        }
        if (!form.date) {
            errors.push('Execution date required.');
        } else if (!this.checkDate(form.date)) {
            errors.push('Execution date must be later than today.');
        }
        return errors;
    }

}
export default new Form()