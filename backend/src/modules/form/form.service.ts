import FormDao from "./form.dao";
import formInterface from "./form.interface";
class formService{
    formDao = new FormDao();
    async getForms() {

        return await this.formDao.getForms();
    }
    async createForm(form: formInterface) {
        const allForms = await this.formDao.getForms();
        form.formId = allForms.length + 1;
        form.sendAt = new Date();
        return await this.formDao.createForm(form);
    }
}

export default formService