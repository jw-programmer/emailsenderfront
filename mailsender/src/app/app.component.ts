import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from './services/email.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [MessageService]
})
export class AppComponent {

  emailForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private messageService: MessageService,
    private emailService: EmailService) {
    this.emailForm = this.formBuilder.group({
      recipient: ["", [Validators.required, Validators.email]],
      sender: ["", [Validators.required]],
      subject: ["", [Validators.required]],
      message: ["", [Validators.required]]
    })
  }

  sendEmail() {
    this.emailService.sendEmail(this.emailForm.value)
      .subscribe(response => {
        this.messageService.add({ severity: "success", summary: "E-mail Enviado", detail: `O e-mail para ${this.emailForm.get("recipient")} foi enviado` })
        this.emailForm.reset()
      },
        error => {
          this.messageService.add({ severity: "error", summary: "Envio falhou", detail: "Houve um erro no broker. Tente mais tarde" })
        })
  }

  clearForm() {
    this.emailForm.reset()
  }
}
