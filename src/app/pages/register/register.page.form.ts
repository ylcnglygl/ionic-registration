import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class RegisterPageForm{

    private formBuilder: FormBuilder;
    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }

    createRegisterForm(): FormGroup{
        return this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]]
        });
    }
}