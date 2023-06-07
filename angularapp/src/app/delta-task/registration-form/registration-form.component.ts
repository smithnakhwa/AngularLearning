import { HttpClient, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DeltaServiceService } from "src/app/delta-service.service";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"],
})
export class RegistrationFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private deltaService: DeltaServiceService,
    private http: HttpClient
  ) {}

  hide = true;
  registrationForm: FormGroup;
  isSubmitted: boolean = false;
  errorMessage: string | boolean;

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registrationForm = this.fb.group({
      user_name: ["", Validators.required],
      user_email: ["", [Validators.required, Validators.email]],
      user_phone_no: ["", [Validators.required, Validators.maxLength(10)]],
      user_pwd: ["", Validators.required],
      user_gender: ["", Validators.required],
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    const user=this.registrationForm.value;

    this.http.post('https://devrunner.co.in/machine_test/index.php/web_api/Users/Register',user).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
