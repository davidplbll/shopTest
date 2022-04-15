import { AbstractControl } from "@angular/forms";

export function validatecontrol(control: AbstractControl
    | null) {
    return control?.invalid && control?.touched;
}